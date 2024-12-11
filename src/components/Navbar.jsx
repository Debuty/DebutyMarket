import React, { useState } from 'react'
import CartIcon from './../Icons/CartIcon';

import { Link, useNavigate, NavLink } from 'react-router-dom';


import './Test.css';
import MenuIcon from './../Icons/MenuIcon';
export default function Navbar(props) {

    const Navigate = useNavigate();

    const HandelNavigat = () => {

        if (true)
            Navigate("/")

    }

    const [MenuLock , SetMenuLock] = useState(true)

    const handelMenuLock = ()=>{
        SetMenuLock(!MenuLock)
    }
    // console.log("Navbar")
console.log(MenuLock)
    return (
        <div>

            <div className="flex bg-green-900 text-black items-center p-2 justify-around relative">


            <div className='Menu-icon cursor-pointer' onClick={handelMenuLock}><MenuIcon/></div>

                 <div className="Debuty-Logo">
                    <a className="btn btn-ghost text-xl">Debuty Market</a>
                </div>

                <div className={MenuLock ? "flex gap-6 font-bold Links" : "flex gap-6 font-bold Links hidden" }>
                    <NavLink to='/'> Menu</NavLink>
                    <NavLink to='/LogIn' >Log In</NavLink>
                   {<NavLink to='/Admin' >Admin</NavLink>}
                </div>
 
  

                <div className=" mr-10 relative">

                <NavLink to="/cart" ><CartIcon /></NavLink> 

                    <span className={props.Items < 10 ? " w-5 h-5 text-lg text-center leading-5 bg-green-700 rounded-full absolute top-0 right-0 "
                        : " w-6 h-6 text-lg text-center leading-5 bg-green-700 rounded-full absolute top-0 right-0 "}>{props.Items}</span>

                </div>

            </div>

        </div>
    )
}
