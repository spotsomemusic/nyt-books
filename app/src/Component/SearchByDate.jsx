import { useState, useEffect } from "react";
//import DatePicker from "react-datepicker";
import { handleFetch } from "../utils/fetchData";
import PropTypes from "prop-types";

const NYT_API_KEY = "ZzgeKyhP0Ly4wfA7p8cK2VQlzgbDQQO3";

const SearchByDate = ({ onSearch }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [booksCategories, setBooksCategories] = useState([]);
    const [error, setError] = useState(null);

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    const fetchData = async () => {
        const selectedList = ""; // Define the selectedList variable
        const formattedDate = startDate.toISOString().split("T")[0];
        const url = `https://api.nytimes.com/svc/books/v3/lists/current/${selectedList}/${formattedDate}.json?api-key=${NYT_API_KEY}`;
        const [data, error] = await handleFetch(url);

        if (data) setBooksCategories(data);
        if (error) setError(error);
    };

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

    const handleSearch = () => {
        fetchData();
    };

    return (
        <div>
            <h2>Search NYT Best Sellers by Date</h2>
            <DatePicker selected={startDate} onChange={handleDateChange} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

SearchByDate.propTypes = {
    onSearch: PropTypes.func.isRequired, // Add onSearch to the props validation
};

export default SearchByDate;
