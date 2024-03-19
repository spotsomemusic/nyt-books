import React, { useState, useEffect } from 'react';
import { handleFetch } from './utils/fetchData';
import './App.css';

const NYT_API_KEY = 'ZzgeKyhP0Ly4wfA7p8cK2VQlzgbDQQO3';

function App() {
  const [booksData, setBooksData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NYT_API_KEY}`;
        const [data, error] = await handleFetch(url);

        if (data) setBooksData(data); 
        if (error) setError(error);
      }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>New York Times Best Sellers</h1>
      {booksData && (
        <ul>
          <li>
            <h2>{booksData.results.display_name}</h2>
            <ul>
              {booksData.results.books.map((book, index) => (
                <li key={index}>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
}

export default App;
