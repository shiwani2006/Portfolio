import React from "react";

export default function Footer() {
  const styles = {
    footer: {
      padding: "40px 20px",
      background: "#faf5ff",
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
      borderTop: "1px solid #e5e7eb"
    },

    name: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#7c3aed",
      marginBottom: "10px"
    },

    text: {
      color: "#64748b",
      fontSize: "14px",
      marginBottom: "10px"
    },

    link: {
      color: "#7c3aed",
      textDecoration: "none",
      fontWeight: "500"
    },

    copyright: {
      marginTop: "20px",
      fontSize: "13px",
      color: "#94a3b8"
    }
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.name}>Shiwani Dhalari</p>

      <p style={styles.text}>
        Frontend Developer | B.Tech CSE (AI)
      </p>

      <p style={styles.text}>
        <a
          href="mailto:shiwanidhalari@gmail.com"
          style={styles.link}
        >
          shiwanidhalari@gmail.com
        </a>
      </p>

      <p style={styles.copyright}>
        © {new Date().getFullYear()} Shiwani Dhalari. All rights reserved.
      </p>
    </footer>
  );
}