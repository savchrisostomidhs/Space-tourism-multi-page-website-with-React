import { Link } from "react-router-dom"
import logo from "./../../assets/shared/logo.svg"
import hamburger from "./../../assets/shared/icon-hamburger.svg"
import close from "./../../assets/shared/icon-close.svg"
import "./Header.css"

function Header({ home, des, crew, tech }) {
    const handleClickOpen = () => {
        const nav = document.querySelector(".header-wrapper>nav");
        const burgerOpen = document.querySelector(".header-wrapper>div.burger .open");
        const burgerClose = document.querySelector(".header-wrapper>div.burger .close");

        nav.style.display = "flex";
        nav.style.animation = "navbar-open 1s forwards";
        burgerOpen.style.display = "none";
        burgerClose.style.display = "block"
    }

    const handleClickClose = () => {
        const nav = document.querySelector(".header-wrapper>nav");
        const burgerOpen = document.querySelector(".header-wrapper>div.burger .open");
        const burgerClose = document.querySelector(".header-wrapper>div.burger .close");

        nav.style.animation = "navbar-close 1s forwards";
        nav.addEventListener("animationend", () => {
            if (nav.getAnimations()[0]?.animationName === "navbar-close") {
                nav.style.display = "none";
            }
        });
        burgerClose.style.display = "none"
        burgerOpen.style.display = "block";
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            document.querySelector(".header-wrapper>nav").style.display = "block";
            document.querySelector(".header-wrapper>div.burger .open").style.displey = "none";
            document.querySelector(".header-wrapper>div.burger .close").style.dispaly = "none";
        } else {
            document.querySelector(".header-wrapper>nav").style.display = "none";
            document.querySelector(".header-wrapper>div.burger .open").style.display = "block";
            document.querySelector(".header-wrapper>div.burger .close").style.display = "none";
        }
    });

    return (
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <Link to={"/"}><img src={logo} alt="logo" /></Link>
                    <div className="line"></div>
                </div>
                <div className="burger">
                    <img className="open" src={hamburger} alt="hamburger" onClick={handleClickOpen} />
                    <img className="close" src={close} alt="close" onClick={handleClickClose} />
                </div>
                <nav>
                    <ul>
                        <li><Link className={(home ? "active" : "") + " preset-8"} to={"/"}><span>00</span> Home</Link></li>
                        <li><Link className={(des ? "active" : "") + " preset-8"} to={"/Destination"}><span>01</span> Destination</Link></li>
                        <li><Link className={(crew ? "active" : "") + " preset-8"} to={"/Crew"}><span>02</span> Crew</Link></li>
                        <li><Link className={(tech ? "active" : "") + " preset-8"} to={"/Technology"}><span>03</span> Technology</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header