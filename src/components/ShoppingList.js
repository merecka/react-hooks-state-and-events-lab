import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All");

  function handleSelection(event) {
    console.log(event.target.value);
    setFilterBy(event.target.value);
  }

  const newItemsArray = items.filter(item => {
    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }
  });

  const itemList = newItemsArray.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelection} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
