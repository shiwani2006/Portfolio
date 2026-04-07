import React from "react";

export default function Skills() {
  const styles = {
    section: {
      padding: "90px 20px",
      background: "linear-gradient(135deg,#fdf4ff,#f8fafc)",
      fontFamily: "Poppins, sans-serif",
    },

    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      textAlign: "center",
    },

    title: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#7c3aed",
      marginBottom: "40px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
    },

    card: {
      background: "#ffffff",
      padding: "25px",
      borderRadius: "18px",
      boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
      textAlign: "left",
    },

    categoryTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1e293b",
      marginBottom: "15px",
    },

    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },

    skill: {
      background: "#f3e8ff",
      color: "#7c3aed",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "500",
      transition: "0.3s",
    },

    skillHover: {
      background: "#7c3aed",
      color: "#ffffff",
    },
  };

  const skillGroups = [
    {
      title: "Frontend",
      items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Programming",
      items: ["Python", "Java"],
    },
    {
      title: "Core Skills",
      items: ["Data Structures & Algorithms", "Problem Solving"],
    },
  ];

  const [hoverIndex, setHoverIndex] = React.useState(null);

  return (
    <section style={styles.section} id="skills">
      <div style={styles.container}>
        <h2 style={styles.title}>Skills</h2>

        <div style={styles.grid}>
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} style={styles.card}>
              <h3 style={styles.categoryTitle}>{group.title}</h3>

              <div style={styles.skillsContainer}>
                {group.items.map((skill, index) => {
                  const key = `${groupIndex}-${index}`;
                  return (
                    <span
                      key={key}
                      style={{
                        ...styles.skill,
                        ...(hoverIndex === key ? styles.skillHover : {}),
                      }}
                      onMouseEnter={() => setHoverIndex(key)}
                      onMouseLeave={() => setHoverIndex(null)}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}