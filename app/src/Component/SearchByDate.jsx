import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "./DropDown";
import BookContext from "../Context/BookContext";

const NYT_API_KEY = "XSnpZqnmRGg49PY5UFiRNhaRs9rbSxjt";


const SearchByDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedList, setSelectedList] = useState("");

  const booksCategories = useContext(BookContext);

  const fetchData = async () => {
    setIsFetching(true);
    const formattedDate = startDate.toISOString().split('T')[0];
    const url = `https://api.nytimes.com/svc/books/v3/lists/${formattedDate}/${selectedList}.json?api-key=${NYT_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Problem fetching data');
      const data = await response.json();
      setBooks(data.results.books);
    } catch (error) {
      console.error("Fetching error:", error);
    } finally {
      setIsFetching(false);
    }
  };

  function handleSelectChange(event) {
    setSelectedList(event.target.value);
  }

  return (
    <div>
      <h1 className="heading">Search NYT Best Sellers by Date</h1>
      <div className="dropdown-container">
      <DatePicker selected={startDate} onChange={setStartDate} />
      <Dropdown
        selectedList={selectedList}
        handleSelectChange={handleSelectChange}
        booksCategories={booksCategories}
      />
      <button onClick={fetchData} disabled={isFetching}>
        {isFetching ? 'Searching...' : 'Search'}
        </button>
        </div>
      <ul className="book-grid">
        {books.map((book, index) => (
          <li className="book" key={index}>
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">{book.author}</p>
            <img
              src={book.book_image}
              alt={book.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchByDate;
