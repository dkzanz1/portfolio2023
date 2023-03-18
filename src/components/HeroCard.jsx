import React from "react";
import img from "./image4.jpeg";

function Card() {
    return<>
        <div className="Herocard">
            <div className="Herotop">
            <img src={img} alt="Avatar" className="circle-img" />
            <h1 className="name">Hi,I'm Paul</h1>
            </div>
            <div className="Herobottom">
            <h2>Web Developer<br /> based in Christchurch,Dorset</h2>
            <p className="HeroInfo">I build Crafted Bespoke Webpages<br/>
                    using both<strong> Front end and Backend</strong></p>
            </div>
        </div>
    </>

}

export default Card;