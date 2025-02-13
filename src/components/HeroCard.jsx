import React from "react";
import img from "../../assets/mephoto.jpg";
// import Water from "../components/Video";
import boatImage from "../../assets/boat.svg"; // Assuming boat.svg is in the same directory
import "./HeroCard.module.css";

function Card() {
    return <>
        <div className="section">
            <div className="Herocard">
                <div className="hero-content">
                    <img src={img} alt="Avatar" className="circle-img" />
                    <h1 className="name"><span>Hi,   </span><span>I'm Paul</span></h1>
                    <div className="HeroBlurb">
                        <h2>Web Developer<br /> who lives by the Sea, <br />I build websites that are as<br /> refreshing as the sea breeze<br />Dorset</h2>
                        <p className="HeroInfo">I build Crafted Bespoke Webpages<br />
                            using<strong> full stack development</strong></p>
                    </div>
                    <div className="boat-container"> {/* Container for positioning */}
                        <img src={boatImage} alt="Cartoon Boat" className="boat" />
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default Card;