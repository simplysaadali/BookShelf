import { useState } from "react";
import "./App.css";
import BookForm from "./components/BookForm";


function App(){
  const [books, setBooks] = useState([]);

  return (
    <div className="container">
      <div className="header">
        <h1 style={{color:"white", fontSize: "30px"}}>My BookShelf</h1>
        <p style={{fontSize: "15px", color:"white"}}>Book Reading Tracker</p>
      </div>

      <BookForm />
    </div>
  )
}

export default App;