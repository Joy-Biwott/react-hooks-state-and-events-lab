import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState("")
  const listClass = addToCart ? "in-cart" : "";
  const handleAddCartClick =()=>{
    setAddToCart("in-cart")
  }
  return (
    <li className= {listClass} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCartClick}>{addToCart? "Remove From Cart" :"Add To Cart" }</button>
    </li>
  );
}

export default Item;
