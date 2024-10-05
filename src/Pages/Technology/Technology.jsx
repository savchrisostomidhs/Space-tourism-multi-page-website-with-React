import { useState } from "react";
import Header from "./../../Components/Header"
import data from "./../../data.json"
import "./Technology.css"

function Technology() {
    const technology = data.technology;
    const [tech, setTech] = useState(technology[0]);

    const handelClick = (e) => {
        const techDots = document.querySelectorAll("div.technology-dots .tech-dot");
        techDots.forEach(techDot => {
            if (techDot.classList.contains("active-tech-dot")) {
                techDot.classList.remove("active-tech-dot");
            }
        });

        setTech(technology[e.target.innerHTML - 1]);
        techDots[e.target.innerHTML - 1].classList.add("active-tech-dot");
    }

    const maxHeight = window.matchMedia("(max-height: 924px) or (max-width: 790px)");

    window.addEventListener("load", () => {
        window.addEventListener("resize", () => {
            const image = document.querySelector(".technology-image img")

            if (maxHeight.matches) {
                image.src = new URL(tech.images.landscape, import.meta.url).href;
            } else {
                image.src = new URL(tech.images.portrait, import.meta.url).href;
            }
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
                                <div className="active-tech-dot preset-4 tech-dot tech-dot-1" onClick={handelClick}>1</div>
                                <div className="preset-4 tech-dot tech-dot-2" onClick={handelClick}>2</div>
                                <div className="preset-4 tech-dot tech-dot-3" onClick={handelClick}>3</div>
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
                            <img src={new URL(maxHeight.matches ? tech.images.landscape : tech.images.portrait, import.meta.url).href} alt={tech.name} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Technology