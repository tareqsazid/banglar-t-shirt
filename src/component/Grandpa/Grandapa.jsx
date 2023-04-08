import React, { createContext, useState } from "react";
import "./granda.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandapa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);

  return (
    <div className="granda">
      <h2>Grandpa</h2>
      <p>has money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="golden Ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandapa;

/**
 * 1. Create conext and export
 * 2. Create a provider and pass a value
 * 3. Use useContext to receive the value
 * **/
