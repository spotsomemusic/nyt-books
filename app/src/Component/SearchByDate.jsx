import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { handleFetch } from "../utils/fetchData";
import PropTypes from "prop-types";

const NYT_API_KEY = "XSnpZqnmRGg49PY5UFiRNhaRs9rbSxjt";


const SearchByDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    setIsFetching(true);
    const formattedDate = startDate.toISOString().split('T')[0];
    const url = `https://api.nytimes.com/svc/books/v3/lists/${formattedDate}/hardcover-fiction.json?api-key=${NYT_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Problem fetching data');
      const data = await response.json();
      setBooks(data.results.books); // Adjust based on the actual path in the response
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
// const SearchByDate = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [books, setBooks] = useState([]);
  
//     const fetchData = async (selectedDate) => {
//       const formattedDate = selectedDate.toISOString().split('T')[0];
//       const url = `https://api.nytimes.com/svc/books/v3/lists/${formattedDate}/hardcover-fiction.json?api-key=${NYT_API_KEY}`;
  
//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Problem fetching data');
//         const data = await response.json();
//         setBooks(data.results.books); // Adjust based on the actual path in the response
//       } catch (error) {
//         console.error("Fetching error:", error);
//       }
//     };
  
//     return (
//       <div>
//         <h2>Search NYT Best Sellers by Date</h2>
//         <DatePicker selected={startDate} onChange={(date) => {
//           setStartDate(date);
//           fetchData(date);
//         }} />
//         <ul>
//           {books.map((book, index) => (
//             <li key={index}>{book.title}</li> // Adjust according to your data structure
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
//   export default SearchByDate;