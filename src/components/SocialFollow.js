import React from "react";
import styles from './SocialFollow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
     faYoutube,
     faFacebook, 
     faTwitter, 
     faInstagram,
     faGithub
} from '@fortawesome/free-brands-svg-icons';

function SocialFollow() {
    const icons =  [
            { id:1, href:'https://www.youtube.com/c/learnbuildteach', icon: faYoutube},
            { id:2, href:'https://www.facebook.com/learnbuildteach', icon: faFacebook},
            { id:3, href:'https://www.twitter.com/jamesqquick', icon: faTwitter},                        
            { id:4, href:'https://www.instagram.com/c/learnbuildteach', icon: faInstagram},
            { id:5, href:'https://www.github.com/c/learnbuildteach', icon: faGithub},
        ];

    return (
         <>
            <div className={styles.iconContainer}>
                <h3>Social Links</h3>
                    {icons.map((icon) => (
                    <a key={icon.id} href={icon.href} className={styles.iconLink}> 
                       <FontAwesomeIcon icon = {icon.icon} size="2x" />
                    </a>
                ))}
            </div>            
        </>
    );
}
export default SocialFollow;