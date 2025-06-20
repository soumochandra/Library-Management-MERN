import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles/App.module.css";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import Navbar from "./Navbar";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className={styles.main}>
        <BookForm fetchBooks={fetchBooks} darkMode={darkMode} />

        {loading ? (
          <div className={styles.skeletonGrid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.skeletonCard} />
            ))}
          </div>
        ) : (
          <div className={styles.bookGrid}>
            {books.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                onDelete={handleDelete}
                darkMode={darkMode}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
