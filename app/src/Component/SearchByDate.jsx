import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { handleFetch } from "../utils/fetchData";
import Dropdown from "./DropDown";

const NYT_API_KEY = "ZzgeKyhP0Ly4wfA7p8cK2VQlzgbDQQO3";

const SearchByDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [booksCategories, setBooksCategories] = useState([]);
  const [selectedList, setSelectedList] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesUrl = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${NYT_API_KEY}`;
      try {
        const [categoriesData, categoriesError] = await handleFetch(categoriesUrl);
        if (categoriesData) {
          setBooksCategories(categoriesData.results.map(category => category.list_name));
        }
        if (categoriesError) {
          throw categoriesError;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

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

  return (
    <div>
      <h2>Search NYT Best Sellers by Date</h2>
      <DatePicker selected={startDate} onChange={setStartDate} />
      <Dropdown
        selectedList={selectedList}
        handleSelectChange={(e) => setSelectedList(e.target.value)}
        booksCategories={booksCategories}
      />
      <button onClick={fetchData} disabled={isFetching}>
        {isFetching ? 'Searching...' : 'Search'}
      </button>
      <ul>
        {books.map((book, index) => (
          <li className="book" key={index}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
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
