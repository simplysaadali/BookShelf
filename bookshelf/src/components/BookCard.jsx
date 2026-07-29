import "../App.css";

function BookCard({ book, onToggle, onRemove }) {
  return (
    <div className={`bookCard ${book.finished ? "finished" : ""}`}>
      <div className="bookLeft">
        <input
          type="checkbox"
          id={`book-${book.id}`}
          checked={book.finished}
          onChange={() => onToggle(book.id)}
          aria-label={`Mark ${book.title} as finished`}
        />
        <label htmlFor={`book-${book.id}`} className="bookInfo">
          <span className="bookTitle">{book.title}</span>
          <span className="bookMeta">
            {book.author} • {book.pages} pages
          </span>
        </label>
      </div>

      <button className="removeBtn" onClick={() => onRemove(book.id)}>
        Remove
      </button>
    </div>
  );
}

export default BookCard;