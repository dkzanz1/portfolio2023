import React from "react";
import * as SI from "react-icons/si";
import styles from "./Section.module.css";

const SkillsGrid = () => {
  const techStack = [
    { id: 1, name: "React", icon: <SI.SiReact />, color: "#61DAFB" },
    { id: 2, name: "JavaScript", icon: <SI.SiJavascript />, color: "#F7DF1E" },
    { id: 3, name: "Node.js", icon: <SI.SiNodedotjs />, color: "#339933" },
    { id: 4, name: "MongoDB", icon: <SI.SiMongodb />, color: "#47A248" },
    { id: 5, name: "HTML5", icon: <SI.SiHtml5 />, color: "#E34F26" },

    { id: 6, name: "Git", icon: <SI.SiGit />, color: "#F05032" },
    { id: 7, name: "Tailwind", icon: <SI.SiTailwindcss />, color: "#06B6D4" },
    { id: 8, name: "Vite", icon: <SI.SiVite />, color: "#646CFF" },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Professional Stack</h2>
      <div className={styles.grid}>
        {techStack.map((tech) => (
          <div key={tech.id} className={styles.skillCard}>
            <div className={styles.iconWrapper}>{tech.icon}</div>
            <span className={styles.skillName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
