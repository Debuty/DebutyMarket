import React, { useEffect, useState } from "react";
import CartIcon from "./../Icons/CartIcon";
import ToggleAddToCart from "./ToggleAddToCart";
import { json } from "react-router-dom";
import Categories from './Categories';
import Pagination from './Pagination';



export default function Menu(props) {

   
 const Resulte = []

  for(let I = (props.PageSize*(props.CurrentPage-1)) ; I < props.PageSize * props.CurrentPage  && I < props.FilterItems.length; I++){

           Resulte.push(props.FilterItems[I])
          }

// console.log(Resulte)

  return (

<div className="text-center mt-10">  

<input type="text"  placeholder="Test" className="p-1 pl-3 border border-black rounded-xl outline-none" />

    <div className="grid grid-cols-3 gap-2 mt-7">
         

     <div className="mr-10"> <Categories Catigorie ={props.Catigorie} selectedCategory={props.selectedCategory} handelClick={props.handelClick}/> </div>  


<div className="col-span-2"> 
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>price</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {Resulte.map((item) => {
    

    return  <tr key={item.id} >
            <td>{item.Name}</td>
            <td>{item.price}</td>
            <td>
              <ToggleAddToCart
                IsToggled={item.IsInCart}
                HandelToggleAddToCart={props.HandelToggleAddToCart}
                item={item}
              />
            </td>
          </tr>
        })}

      </tbody>
    </table>
    <Pagination CurrentPage = {props.CurrentPage} handelClickPagination={props.handelClickPagination} Pages={props.Pages}/>
    </div>

    </div>
  </div>
  );
}
