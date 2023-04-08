import React from "react";
import "./Tshirts.css";

const Tshirts = ({ tshirt, handleAddToCaert }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCaert(tshirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirts;
