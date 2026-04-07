import React from "react";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const styles = {
    nav: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 40px",
      background: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #e5e7eb",
      fontFamily: "Poppins, sans-serif"
    },

    brand: {
      color: "#7c3aed",
      fontSize: "22px",
      fontWeight: "700",
      letterSpacing: "0.5px"
    },

    links: {
      display: "flex",
      gap: "24px",
      alignItems: "center"
    },

    link: {
      color: "#475569",
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "15px",
      transition: "color 0.3s ease",
      cursor: "pointer"
    },

    linkHover: {
      color: "#7c3aed"
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>Shiwani</div>

      <div style={styles.links}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            style={{
              ...styles.link,
              ...(hoverIndex === index ? styles.linkHover : {})
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}