import React from "react";

export default function About() {
  const styles = {
    section: {
      padding: "90px 20px",
      background: "linear-gradient(135deg, #fdf4ff, #f8fafc, #ecfeff)",
      fontFamily: "Poppins, sans-serif"
    },

    container: {
      maxWidth: "1000px",
      margin: "0 auto"
    },

    card: {
      background: "#ffffff",
      padding: "50px 40px",
      borderRadius: "24px",
      textAlign: "center",
      boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)"
    },

    title: {
      fontSize: "38px",
      fontWeight: "700",
      marginBottom: "20px",
      color: "#7c3aed"
    },

    text: {
      color: "#475569",
      lineHeight: "1.8",
      fontSize: "17px",
      maxWidth: "760px",
      margin: "0 auto 16px"
    },

    skillsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "28px"
    },

    skill: {
      background: "#fdf2f8",
      color: "#be185d",
      padding: "10px 18px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "500"
    }
  };

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>About Me</h2>

          <p style={styles.text}>
            I’m a B.Tech Computer Science student specializing in Artificial
            Intelligence, with a strong interest in frontend development and
            problem solving.
          </p>

          <p style={styles.text}>
            I enjoy building clean and responsive user interfaces, solving coding
            problems, and continuously learning modern technologies to improve my
            skills as a developer.
          </p>

          <div style={styles.skillsContainer}>
            <span style={styles.skill}>React</span>
            <span style={styles.skill}>JavaScript</span>
            <span style={styles.skill}>Tailwind CSS</span>
            <span style={styles.skill}>Python</span>
            <span style={styles.skill}>Java</span>
            <span style={styles.skill}>DSA</span>
          </div>
        </div>
      </div>
    </section>
  );
}