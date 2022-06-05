import React, {useState} from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(false)
  function handleAddToCart() {
    setInCart((inCart) => !inCart)
  }
  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={handleAddToCart}
        className={inCart ? 'remove' : 'add'}>
        {inCart ? "Remove from" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
