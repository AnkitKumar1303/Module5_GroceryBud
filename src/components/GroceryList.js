// src/components/GroceryList.js

import React from 'react';

const GroceryList = ({ groceries, removeFromList }) => {
  return (
    <ul>
      {groceries.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => removeFromList(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default GroceryList;
