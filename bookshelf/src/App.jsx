import { useState } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import ShelfStats from "./components/ShelfStats";


function App(){
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const totalBooks = books.length;
  const finishedBooks = books.filter((book) => book.finished).length;
  const pagesRead = books
    .filter((book) => book.finished)
    .reduce((sum, book) => sum + book.pages, 0);

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
    </div>
  )
}

export default App;