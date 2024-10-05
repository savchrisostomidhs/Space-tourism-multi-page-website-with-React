import { useEffect, useState } from "react";
import Header from "./../../Components/Header"
import data from "./../../data.json"
import launchLand from "./../../assets/technology/image-launch-vehicle-landscape.jpg"
import launchPort from "./../../assets/technology/image-launch-vehicle-portrait.jpg"
import spaceLand from "./../../assets/technology/image-space-capsule-landscape.jpg"
import spacePort from "./../../assets/technology/image-space-capsule-portrait.jpg"
import spaceportLand from "./../../assets/technology/image-spaceport-landscape.jpg"
import spaceportPort from "./../../assets/technology/image-spaceport-portrait.jpg"
import "./Technology.css"

function Technology() {
    const maxHeight = window.matchMedia("(max-height: 924px) or (max-width: 790px)");

    const [number, setNumber] = useState(0);

    const imageLandscape = [launchLand, spaceportLand, spaceLand];
    const imagesPortrait = [launchPort, spacePort, spaceportPort];
    const [image, setImage] = useState(maxHeight.matches ? imageLandscape[number] : imagesPortrait[number]);

    const technology = data.technology;
    const [tech, setTech] = useState(technology[number]);

    const handleClick = (e) => {
        const techDots = document.querySelectorAll("div.technology-dots .tech-dot");
        techDots.forEach(techDot => {
            if (techDot.classList.contains("active-tech-dot")) {
                techDot.classList.remove("active-tech-dot");
            }
        });

        setNumber(e.target.innerHTML - 1);
        techDots[e.target.innerHTML - 1].classList.add("active-tech-dot");
    }

    useEffect(() => {
        setImage(maxHeight.matches ? imageLandscape[number] : imagesPortrait[number]);
        setTech(technology[number]);
    }, [number]);

    window.addEventListener("load", () => {
        window.addEventListener("resize", () => {
            
        });
    });

    return (
        <div className="technology">
            <Header home={false} des={false} crew={false} tech={true} />
            <main className="technology">
                <div className="technology-container">
                    <h1 className="preset-5"><span>03</span> Space launch 101</h1>
                    <div className="technology-content">
                        <div className="technology-explanation">
                            <div className="technology-dots">
                                <div className="active-tech-dot preset-4 tech-dot tech-dot-1" onClick={handleClick}>1</div>
                                <div className="preset-4 tech-dot tech-dot-2" onClick={handleClick}>2</div>
                                <div className="preset-4 tech-dot tech-dot-3" onClick={handleClick}>3</div>
                            </div>
                            <div className="technology-text">
                                <div className="technology-name">
                                    <p className="preset-4">The terminology...</p>
                                    <p className="preset-3">{tech.name}</p>
                                </div>
                                <p className="preset-9">{tech.description}</p>
                            </div>
                        </div>
                        <div className="technology-image">
                            <img src={image} alt={tech.name} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Technology