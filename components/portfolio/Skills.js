import styles from "@/styles/Home.module.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "디자인",
      skills: ["Adobe Creative Suite", "Figma", "Sketch", "Typography"]
    },
    {
      title: "개발",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js"]
    },
    {
      title: "기타",
      skills: ["Photography", "3D Modeling", "Motion Graphics", "Brand Strategy"]
    }
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>스킬 & 전문 분야</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
