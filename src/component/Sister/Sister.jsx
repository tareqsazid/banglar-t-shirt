import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandapa";

const Sister = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>
        <small>Grandapa money: {money}</small>
      </p>
    </div>
  );
};

export default Sister;
