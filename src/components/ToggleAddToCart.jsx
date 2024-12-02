import React from 'react'
import CartIcon from './../Icons/CartIcon';

export default function ToggleAddToCart({IsToggled,HandelToggleAddToCart,item}) {
    return (
        <div className='cursor-pointer ' onClick={()=>HandelToggleAddToCart(item)}>
            <CartIcon  fill={IsToggled ? "black":"transparent"}/>
            </div>  

    )
}
