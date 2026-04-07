import React from "react";
import profile from "../assets/me.png";

export default function Hero() {
  const styles = {
    section: {
      padding: "100px 20px",
      background: "linear-gradient(135deg,#fdf4ff,#f8fafc)",
      fontFamily: "Poppins, sans-serif"
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "40px"
    },

    image: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
    },

    textContainer: {
      maxWidth: "500px"
    },

    name: {
      fontSize: "42px",
      color: "#1e293b",
      fontWeight: "700",
      marginBottom: "10px"
    },

    highlight: {
      color: "#7c3aed"
    },

    subtitle: {
      fontSize: "20px",
      color: "#64748b",
      marginBottom: "15px"
    },

    description: {
      fontSize: "16px",
      color: "#475569",
      lineHeight: "1.7",
      marginBottom: "25px"
    },

    buttons: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap"
    },

    primaryBtn: {
      padding: "12px 24px",
      borderRadius: "12px",
      background: "#7c3aed",
      color: "#fff",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "14px"
    },

    secondaryBtn: {
      padding: "12px 24px",
      borderRadius: "12px",
      border: "1px solid #7c3aed",
      color: "#7c3aed",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "14px"
    }
  };

  return (
    <section style={styles.section} id="home">
      <div style={styles.container}>

        {/* Image */}
        <img src={profile} alt="Shiwani" style={styles.image} />

        {/* Text */}
        <div style={styles.textContainer}>
          <h1 style={styles.name}>
            Hi, I'm <span style={styles.highlight}>Shiwani Dhalari</span>
          </h1>

          <p style={styles.subtitle}>Frontend Developer</p>

          <p style={styles.description}>
            I’m a B.Tech CSE (AI) student passionate about building clean,
            responsive web interfaces and solving real-world problems using
            modern technologies.
          </p>

          <div style={styles.buttons}>
            <a
              href="https://www.linkedin.com/in/shiwani-dhalari-2876b2288/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.primaryBtn}
            >
              LinkedIn
            </a>

            <a
              href="#projects"
              style={styles.secondaryBtn}
            >
              View Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}