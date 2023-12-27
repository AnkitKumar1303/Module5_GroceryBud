// src/App.js

import React, { useState } from 'react';
import GroceryList from './components/GroceryList';
import GroceryForm from './components/GroceryForm';
import './App.css'; // Link external CSS

const App = () => {
  const [groceries, setGroceries] = useState([]);

  const addToList = (item) => {
    setGroceries([...groceries, item]);
  };

  const removeFromList = (index) => {
    const updatedList = groceries.filter((_, i) => i !== index);
    setGroceries(updatedList);
  };

  return (
    <div className="container">
      <h1>Grocery Bud</h1>
      <GroceryForm addToList={addToList} />
      <GroceryList groceries={groceries} removeFromList={removeFromList} />
    </div>
  );
};

export default App;

