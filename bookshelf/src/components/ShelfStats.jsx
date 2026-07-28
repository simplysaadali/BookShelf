import "../App.css"

function ShelfStats({totalBooks, finishedBooks, pagesRead}){
    return(
        <div className="shelfStat">
            <div className="stat">
                <span className="statVal">{totalBooks}</span>
                <span className="statLabel">Total Books</span>
            </div>

            <div className="stat">
                <span className="statVal">{finishedBooks}</span>
                <span className="statLabel">Finished</span>
            </div>

            <div className="stat">
                <span className="statVal">{pagesRead}</span>
                <span className="statLabel">Pages Read</span>
            </div>
        </div>
    )
}

export default ShelfStats;