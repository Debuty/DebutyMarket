import React, { useState, useEffect, createContext } from "react";
import CartItem from "./CartItem";
// import Navbar from './Navbar';




export default function Cart(props) {



  const {
    Items,
    DeletAll,
    handleReset,
    increment,
    decrement,
    Reset_Componant,
    handleDelet,
  } = props;

  //  console.log("Cart")
  return (
   
    <div>
      {Items.length === 0 && (
        <div className="btn btn-primary btn-xs ml-6 mt-4 w-20 h-11">
          Items are Empty
        </div>
      )}
      {/* {Items.length === 0 && <button className="btn btn-primary btn-xs ml-6 mt-4 w-20 h-11" onClick={GetBackItems}>Get Back Items</button>} */}

      {Items.map((Item, index) => {
        return (
        
          <CartItem
            key={Item.id}
            Item={Item}
            increment={increment}
            handleDelet={handleDelet}
            decrement={decrement}
            Reset_Componant={Reset_Componant}
         
          />
        );
      })}

      {Items.length > 0 && (
        <button
          className="btn btn-primary btn-xs ml-6 mt-4 w-20 h-11"
          onClick={handleReset}
        >
          Reset
        </button>
      )}

      {Items.length > 0 && (
        <button
          className="btn btn-primary btn-xs ml-6 mt-4 w-20 h-11"
          onClick={DeletAll}
        >
          {" "}
          Delet All
        </button>
      )}
    </div>
  );
}
