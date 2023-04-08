import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let messege;
  if (cart.length === 0) {
    messege = <p>Please add some products</p>;
  } else {
    messege = (
      <div>
        <h3>Richman</h3>
        <p>
          <small>Thanks for buying this products</small>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order Summary: {cart.length}
      </h2>
      <p
        className={`bold bordered ${cart.length === 3 ? "yellow" : "purple"}`}
        Something
      ></p>
      {cart.length > 2 ? (
        <span className="yellow">Buy more</span>
      ) : (
        <span>Poorman</span>
      )}
      {messege}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double Bonanza</p>}
      {cart.length === 3 || <h3>It is not three</h3>}
    </div>
  );
};

export default Cart;

// consditional rendering
//use if else to set a variable that will contain an element, conponent
//ternary condition, for true,
//logical && (if the condition is true then the next thing will be displayed)
// logical or (if the condition is false then the next thing will be displayed)

// Conditional CSS
// use ternary
// ternary inside template strings
