import React from "react";
import * as SI from "react-icons/si";
import styles from "./Section.module.css";

const SkillsGrid = () => {
  const techStack = [
    { id: 1, name: "React", icon: <SI.SiReact />, color: "#61DAFB" },
    { id: 2, name: "JavaScript", icon: <SI.SiJavascript />, color: "#F7DF1E" },
    {
      id: 3,
      name: "TypeScript (Transitioning)",
      icon: <SI.SiTypescript />,
      color: "#3178C6",
    },
    { id: 4, name: "Vite", icon: <SI.SiVite />, color: "#646CFF" },
    { id: 5, name: "CSS Modules", icon: <SI.SiCssmodules />, color: "#000000" },
    { id: 6, name: "HTML5 / A11y", icon: <SI.SiHtml5 />, color: "#E34F26" },
    { id: 7, name: "Git Workflow", icon: <SI.SiGit />, color: "#F05032" },
    { id: 8, name: "Node.js", icon: <SI.SiNodedotjs />, color: "#339933" },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Professional Stack</h2>
      <div className={styles.grid}>
        {techStack.map((tech) => (
          <div
            key={tech.id}
            className={`${styles.skillCard} modularBox`}
            style={{ "--hover-color": tech.color }}
          >
            <div className={styles.iconWrapper}>{tech.icon}</div>
            <span className={styles.skillName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
