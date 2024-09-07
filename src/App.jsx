import BookList from "./components/BookList";
import { Books } from "./utils/mockdata";
import "./components/style.css";
import { useState } from "react";

function App() {
  const [searchtext, setsearchText] = useState("");
  const [bookList, setBookList] = useState(Books)

  function handleSearch() {

    
  console.log("searchtext", searchtext)
   const filtereddBooks = Books.filter(data => data.title.toLowerCase().includes(searchtext.toLowerCase()) )

  setBookList(filtereddBooks)
   console.log("filtered Book", filtereddBooks)
  }
  return (
    <>
      <div className="search">
        <h1>Search Book</h1>
        <div>
          <input
            type="text"
            name=""
            id=""
            className="search-input"
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <BookList booksData={bookList} />
    </>
  );
}

export default App;
