import React, { useState, useEffect } from "react";
import BookContext from "./BookContext";
import { handleFetch } from "../utils/fetchData";

const NYT_API_KEY = "XSnpZqnmRGg49PY5UFiRNhaRs9rbSxjt";

const BookProvider = ({ children }) => {
  const [booksCategories, setBooksCategories] = useState([]);

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

  return (
    <BookContext.Provider value={booksCategories}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
