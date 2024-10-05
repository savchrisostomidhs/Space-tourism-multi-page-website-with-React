import { useState } from "react";
import Header from "../../Components/Header"
import data from "./../../data.json"
import "./Crew.css"

function Crew() {
    const crew = data.crew;
    const [member, setMember] = useState(crew[0]);

    const handleClick = (e) => {
        const dots = document.querySelectorAll("div.crew-dots .dot");
        dots.forEach(dot => {
            if (dot.classList.contains("active-dot")) {
                dot.classList.remove("active-dot");
            }
        });

        setMember(crew[e.target.innerHTML]);
        dots[e.target.innerHTML].classList.add("active-dot");
    };

    return (
        <div className="crew">
            <Header home={false} des={false} crew={true} tech={false} />
            <main className="crew">
                <div className="crew-container">
                    <h1 className="preset-5"><span>02</span> Meet your crew</h1>
                    <div className="crew-content">
                        <div className="crew-explanation">
                            <div className="crew-text">
                                <div className="crew-name">
                                    <p className="preset-4">{member.role}</p>
                                    <p className="preset-3">{member.name}</p>
                                </div>
                                <p className="preset-9">{member.bio}</p>
                            </div>
                            <div className="crew-dots">
                                <div className="active-dot dot dot-1" onClick={handleClick}>0</div>
                                <div className="dot dot-2" onClick={handleClick}>1</div>
                                <div className="dot dot-3" onClick={handleClick}>2</div>
                                <div className="dot dot-4" onClick={handleClick}>3</div>
                            </div>
                        </div>
                        <div className="crew-image">
                            <img src={new URL(member.images.png, import.meta.url).href} alt={member.name} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Crew