
import React, { useState } from "react";
import styles from "./styles/Form.module.css";
import axios from 'axios';


const BookForm = ({ fetchBooks, darkMode }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/books", formData);
    setFormData({ title: "", author: "", isbn: "" });
    fetchBooks();
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`${styles.form} ${darkMode ? styles.darkForm : ""}`}
    >
      <h2>Add New Book</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
          required
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Add Here
      </button>
    </form>
  );
};

export default BookForm;