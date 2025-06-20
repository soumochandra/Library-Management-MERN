
import React from "react";
import styles from "./styles/BookCard.module.css";

const BookCard = ({ book, onDelete, darkMode }) => {
  return (
    <div className={`${styles.card} ${darkMode ? styles.darkCard : ""}`}>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>by {book.author}</p>
        <p className={styles.isbn}>ISBN: {book.isbn}</p>
        <div className={styles.status}>
          <span className={book.available ? styles.available : styles.borrowed}>
            {book.available ? "Available" : "Borrowed"}
          </span>
        </div>
      </div>
      <button 
        className={styles.deleteBtn}
        onClick={() => onDelete(book._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default BookCard;