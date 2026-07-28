import "../App.css"

function BookForm(){
    return(
       <div className="BookForm">
            <div className="upperForm">
                <h4>Title</h4>
                <h4>Author</h4>
                <h4>Pages</h4>
            </div>

            <div className="lowerForm">
                <input type="text" placeholder="Book title"/>

                <input type="text" placeholder="Author name"/>

                <input type="number" placeholder="Pages"/>

                <button>Add Book</button>
            </div>
       </div>
    )
}

export default BookForm;