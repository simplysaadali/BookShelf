import "../App.css"
import { useState } from "react";

function BookForm({onAddBook}){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

    if (
      title.trim() === "" ||
      author.trim() === "" ||
      pages === "" ||
      Number(pages) <= 0
    ) {
      setError("Please Enter Valid Inputs :)");
      return;
    } 
    const newBook = {
        id: Date.now(),
        title: title.trim(),
        author: author.trim(),
        pages: Number(pages),
        finished: false,
    };

    onAddBook(newBook);

    setTitle("");
    setAuthor("");
    setPages("");
    setError("");
}
   return (
    <form className="BookForm" onSubmit={handleSubmit}>
      <div className="upperForm">
        <label htmlFor="title">Title</label>
        <label htmlFor="author">Author</label>
        <label htmlFor="pages">Pages</label>
      </div>

      <div className="lowerForm">
        <input
          id="title"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          id="author"
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          id="pages"
          type="number"
          placeholder="Pages"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />

        <button type="submit">Add Book</button>
      </div>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default BookForm;