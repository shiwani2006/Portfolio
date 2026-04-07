import React from "react";

export default function Projects() {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const projects = [
    {
      name: "Snake Game",
      description:
        "A simple and interactive browser-based snake game built using JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/shiwani2006/snake-game",
    },
    {
      name: "Live Clock",
      description:
        "A real-time digital clock that updates dynamically using JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/shiwani2006/Live-Clock",
    },
    {
      name: "Personalized Learning Recommendation System",
      description:
        "A project that recommends personalized learning resources based on user needs and preferences.",
      tech: ["Python", "Machine Learning"],
      link: "https://github.com/shiwani2006/Personalized-Learning-Recommendation-System",
    },
    {
      name: "Invisible Cloak",
      description:
        "A computer vision project that creates an invisible cloak effect using image processing techniques.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      link: "https://github.com/shiwani2006/computer-vision-insibile-cloak",
    },
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website built to showcase my skills, projects, and contact information.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://github.com/shiwani2006/Portfolio",
    },
  ];

  const styles = {
    section: {
      padding: "90px 20px",
      background: "linear-gradient(135deg,#fdf4ff,#f8fafc,#ecfeff)",
      fontFamily: "Poppins, sans-serif",
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "center",
    },

    title: {
      fontSize: "38px",
      color: "#7c3aed",
      fontWeight: "700",
      marginBottom: "40px",
    },

    projectList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "24px",
    },

    projectCard: {
      background: "#ffffff",
      padding: "24px",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
      transition: "all 0.3s ease",
      textAlign: "left",
      minHeight: "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },

    projectCardHover: {
      transform: "translateY(-6px)",
      boxShadow: "0 16px 30px rgba(124, 58, 237, 0.15)",
    },

    projectName: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#1e293b",
      marginBottom: "12px",
    },

    description: {
      fontSize: "15px",
      color: "#64748b",
      lineHeight: "1.7",
      marginBottom: "16px",
    },

    techContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "20px",
    },

    techTag: {
      background: "#f3e8ff",
      color: "#7c3aed",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "500",
    },

    link: {
      display: "inline-block",
      marginTop: "auto",
      color: "#7c3aed",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "14px",
    },
  };

  return (
    <section style={styles.section} id="projects">
      <div style={styles.container}>
        <h2 style={styles.title}>Projects</h2>

        <div style={styles.projectList}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                ...styles.projectCard,
                ...(hoverIndex === index ? styles.projectCardHover : {}),
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div>
                <h3 style={styles.projectName}>{project.name}</h3>
                <p style={styles.description}>{project.description}</p>

                <div style={styles.techContainer}>
                  {project.tech.map((item, i) => (
                    <span key={i} style={styles.techTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}