import React from "react";

function Dropdown({ selectedList, handleSelectChange, booksCategories }) {
  return (
    <select value={selectedList} onChange={handleSelectChange}>
      {booksCategories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;