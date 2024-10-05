import { Link } from "react-router-dom"
import Header from "./../../Components/Header"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <Header home={true} des={false} crew={false} tech={false} />
            <main className="home">
                <div className="home-container">
                    <div className="content">
                        <div className="home-text">
                            <h2 className="preset-5">So, you want to travel to</h2>
                            <h1 className="preset-1">Space</h1>
                            <p className="preset-9">Let’s face it; if you want to go to space, you might as well genuinely go to
                                outer space and not hover kind of on the edge of it. Well sit back, and relax
                                because we’ll give you a truly out of this world experience!
                            </p>
                        </div>
                        <div className="explore">
                            <Link to={"/Destination"}><div className="preset-4 circle">Explore</div></Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home