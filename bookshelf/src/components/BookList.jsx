import "../App.css";
import BookCard from "./BookCard";

function BookList({ books, onToggle, onRemove }) {
  if (books.length === 0) {
    return <p className="emptyMessage">No books here yet. Add one above!</p>;
  }

  return (
    <div className="bookList">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default BookList;