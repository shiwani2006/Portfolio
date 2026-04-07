import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const styles = {
    section: {
      padding: "90px 20px",
      background: "linear-gradient(135deg,#fdf4ff,#f8fafc)",
      fontFamily: "Poppins, sans-serif"
    },

    container: {
      maxWidth: "700px",
      margin: "0 auto",
      background: "#ffffff",
      borderRadius: "20px",
      padding: "45px 40px",
      boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)"
    },

    title: {
      fontSize: "34px",
      fontWeight: "700",
      color: "#7c3aed",
      marginBottom: "25px",
      textAlign: "center"
    },

    input: {
      width: "100%",
      padding: "13px 16px",
      marginBottom: "16px",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
      fontSize: "15px",
      outline: "none"
    },

    textarea: {
      width: "100%",
      padding: "13px 16px",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
      fontSize: "15px",
      minHeight: "120px",
      resize: "none",
      marginBottom: "18px",
      outline: "none"
    },

    button: {
      padding: "12px",
      borderRadius: "12px",
      border: "none",
      background: "#7c3aed",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      width: "100%",
      transition: "0.3s ease"
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section style={styles.section} id="contact">
      <div style={styles.container}>
        <h2 style={styles.title}>Contact</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="email"
            placeholder="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            style={styles.button}
            type="submit"
            onMouseEnter={(e) => (e.target.style.background = "#6d28d9")}
            onMouseLeave={(e) => (e.target.style.background = "#7c3aed")}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}