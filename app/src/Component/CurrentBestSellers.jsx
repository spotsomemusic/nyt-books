import React, { useState, useEffect } from "react";
import { handleFetch } from "../utils/fetchData";

const NYT_API_KEY = "ZzgeKyhP0Ly4wfA7p8cK2VQlzgbDQQO3";

function CurrentBestSellers() {
  const [booksData, setBooksData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedList, setSelectedList] = useState("hardcover-fiction");
  const [booksCategories, setBooksCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesUrl = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${NYT_API_KEY}`;
      const [categoriesData, categoriesError] = await handleFetch(categoriesUrl);

      if (categoriesData) {
        setBooksCategories(categoriesData.results.map(category => category.list_name));
      }
      if (categoriesError) {
        setError(categoriesError);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.nytimes.com/svc/books/v3/lists/current/${selectedList}.json?api-key=${NYT_API_KEY}`;
      const [data, error] = await handleFetch(url);

      if (data) setBooksData(data);
      if (error) setError(error);
    };

    fetchData();
  }, [selectedList]);

  const handleSelectChange = (event) => {
    setSelectedList(event.target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>New York Times Best Sellers</h1>
      <div>
        <label htmlFor="listSelect">Select List:</label>
        <select id="listSelect" value={selectedList} onChange={handleSelectChange}>
          {booksCategories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      {booksData && (
        <ul>
          {booksData.results.books.map((book, index) => (
            <li className="book" key={index}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <img src={book.book_image} alt={book.title} />
              <p>{book.description}</p>
              <p>Publisher: {book.publisher}</p>
              <p>ISBN: {book.primary_isbn10}</p>
              <ul className="buy-links">
                <h3>Buy Now:</h3>
                {book.buy_links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CurrentBestSellers;
