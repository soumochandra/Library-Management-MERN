
import React from "react";
import styles from "./styles/Navbar.module.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.darkNav : ""}`}>
      <h1 className={styles.logo}>📚 Library Manager by Sir Soumo Chandra</h1>
      <button 
        className={styles.toggleBtn}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;