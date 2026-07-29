import { useState } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import ShelfStats from "./components/ShelfStats";
import BookList from "./components/BookList";


function App(){
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState([]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const totalBooks = books.length;
  const finishedBooks = books.filter((book) => book.finished).length;
  const pagesRead = books
    .filter((book) => book.finished)
    .reduce((sum, book) => sum + book.pages, 0);

  const toggleFinished = (id) =>{
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, finished: !book.finished } : book
      )
    );
  }

  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) => {
    if (filter === "Reading") return !book.finished;
    if (filter === "Finished") return book.finished;
    return true;
  });

  return (
    <div className="container">
      <div className="header">
        <h1 style={{color:"white", fontSize: "30px"}}>My BookShelf</h1>
        <p style={{fontSize: "15px", color:"white"}}>Book Reading Tracker</p>
      </div>

      <BookForm onAddBook={addBook} />

      <ShelfStats
        totalBooks={totalBooks}
        finishedBooks={finishedBooks}
        pagesRead={pagesRead}
      />  

      <div className="filterBar">
        {["All", "Reading", "Finished"].map((option) => (
          <button
            key={option}
            className={`filterBtn ${filter === option ? "active" : ""}`}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <BookList
        books={filteredBooks}
        onToggle={toggleFinished}
        onRemove={removeBook}
      />
    </div>
  )
}

export default App;