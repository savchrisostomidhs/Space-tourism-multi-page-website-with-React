import { useState } from "react";
import Header from "../../Components/Header"
import data from "./../../data.json"
import "./Destination.css"

function Destination() {
    const destinations = data.destinations;
    const [destination, setDestination] = useState(destinations[0]);

    const handleClick = (e) => {
        const listItems = document.querySelectorAll(".des-expl-cont ul.options li");
        listItems.forEach(item => {
            if (item.classList.contains("des-active")) {
                item.classList.remove("des-active");
            }
        });

        destinations.forEach((_, i) => {
            if (e.target.innerHTML === destinations[i].name) {
                setDestination(destinations[i]);
                listItems[i].classList.add("des-active");
            }
        });
    };

    return (
        <div className="destination">
            <Header home={false} des={true} crew={false} tech={false} />
            <main className="destination">
                <div className="destination-container">
                    <h1 className="preset-5 title"><span>01</span> Pick your destination</h1>
                    <div className="destination-content">
                        <div className="destination-image">
                            <img src={new URL(destination.images.png, import.meta.url).href} alt={destination.name} />
                        </div>
                        <div className="destination-explanation">
                            <div className="des-expl-cont">
                                <ul className="options">
                                    <li className="des-active preset-8" onClick={handleClick}>Moon</li>
                                    <li className="preset-8" onClick={handleClick}>Mars</li>
                                    <li className="preset-8" onClick={handleClick}>Europa</li>
                                    <li className="preset-8" onClick={handleClick}>Titan</li>
                                </ul>
                                <div className="des-expl-text">
                                    <p className="preset-2 des-name">{destination.name}</p>
                                    <p className="preset-9 des-info">{destination.description}</p>
                                </div>
                                <div className="des-line"></div>
                                <div className="des-statistics">
                                    <div className="distance">
                                        <h3 className="preset-7 distance-title">Avg. distance</h3>
                                        <p className="preset-6 avg-km">{destination.distance}</p>
                                    </div>
                                    <div className="travel-time">
                                        <h3 className="preset-7 travel-time-title">Est. travel time</h3>
                                        <p className="preset-6 est-time">{destination.travel}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Destination