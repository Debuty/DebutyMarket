import { useState, useEffect, useContext } from "react";
import Delet from './../Icons/Delet';


export default function CartItem(props) {

 

  const { Item, Reset_Componant, decrement, handleDelet, increment } = props;

  const { Name, Count } = Item;


  const Change_Color = () => {


  
    let Defult_Style = " px-1  rounded-lg text-center ";

    if (props.Item.Count === 0) {
      Defult_Style += "bg-yellow-400"
    } else {
      Defult_Style += "bg-slate-400"
    }

    return Defult_Style;
  }

 
// console.log("CartItem")

  return (
    <div  >
      <div className=" bg-emerald-800 w-fit px-5 py-3 ml-4  rounded-lg mt-3  max-w-96 grid grid-cols-7 gap-4 items-center">

        <div className=" col-span-2" >{Name} </div>

        <span className={Change_Color()}>{Count}</span>

        <button onClick={() => increment(Name)} className="btn btn-primary btn-xs " >+</button>

        <button onClick={() => decrement(Name)} className="btn btn-primary btn-xs " >-</button>

        <button onClick={() => Reset_Componant(Name)} className="btn btn-primary btn-xs bg-black border-white" >Reset</button>
        <button className="btn btn-primary btn-xs h-10 bg-black border-none " onClick={() => handleDelet(Name)}>
          <Delet />
        </button>
      </div>
    </div>

  )
}
