import React from "react";
import img from "./image5.jpg";
// import Water from "../components/Video";



function Card() {
    return<>
    <div className="section">
        <div className="Herocard">
            <div className="hero-content">
                <img src={img} alt="Avatar" className="circle-img" />
                     <h1 className="name"><span>Hi,<br/></span><span>I'm Paul</span></h1>
                     <div className="hero-blurb">
                    <h2>Web Developer<br /> who lives by the Sea, <br/>based in Christchurch,<br/>Dorset</h2>
                    <p className="HeroInfo">I build Crafted Bespoke Webpages<br/>
                    using both<strong> Front end and Backend</strong></p>
                    </div>
            </div>
        </div>
    </div>
</>

}

export default Card;