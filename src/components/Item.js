import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const cartMessage = inCart ? "Remove from Cart" : "Add to Cart";

  function addToCart() {
    setInCart(!inCart);
  }


  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={addToCart}>{cartMessage}</button>
    </li>
  );
}

export default Item;
