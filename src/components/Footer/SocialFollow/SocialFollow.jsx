import React from "react";
import styles from "./SocialFollow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  const icons = [
    {
      id: 1,
      href: "https://www.youtube.com/c/learnbuildteach",
      icon: faYoutube,
      label: "YouTube",
    },
    {
      id: 2,
      href: "https://www.facebook.com/learnbuildteach",
      icon: faFacebook,
      label: "Facebook",
    },
    {
      id: 3,
      href: "https://www.twitter.com/jamesqquick",
      icon: faTwitter,
      label: "Twitter",
    },
    {
      id: 4,
      href: "https://www.instagram.com/c/learnbuildteach",
      icon: faInstagram,
      label: "Instagram",
    },
    {
      id: 5,
      href: "https://www.github.com/c/learnbuildteach",
      icon: faGithub,
      label: "GitHub",
    },
  ];

  return (
    <>
      <nav className={styles["icon-container"]}>
        <h3 className={styles["social-container-title"]}>Social media Links</h3>
        {icons.map((icon) => (
          <a
            key={icon.id}
            href={icon.href}
            className={styles["social-container-icon-link"]}
            // aria-label={icon.label}// Accessibility: Provides a label for screen readers
            target="_blank"
            rel="noopener noreferrer" // Standard security for external link
          >
            <FontAwesomeIcon icon={icon.icon} size="2x" />
          </a>
        ))}
      </nav>
    </>
  );
}
export default SocialFollow;
