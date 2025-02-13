import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
     faYoutube,
     faFacebook, 
     faTwitter, 
     faInstagram,
     faGithub
} from '@fortawesome/free-brands-svg-icons';
// import styles from './socialFollow.module.css';

function SocialFollow() {
    return<>
        <div className="container">
            <h3>Social Follow</h3>
            <a href="https://www.youtube.com/c/jamesqquick"
                className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
             <a href="https://www.facebook.com/learnbuildteach"
                className="facebook social"> 
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/jamesqquick"
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/c/learnbuildteach"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.github.com/c/learnbuildteach"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    </>
}

export default SocialFollow;