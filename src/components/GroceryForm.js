// src/components/GroceryForm.js

import React, { useState } from 'react';

const GroceryForm = ({ addToList }) => {
  const [grocery, setGrocery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (grocery.trim() !== '') {
      addToList(grocery);
      setGrocery('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a grocery item"
        value={grocery}
        onChange={(e) => setGrocery(e.target.value)}
      />
      <button type="submit">Add to List</button>
    </form>
  );
};

export default GroceryForm;
