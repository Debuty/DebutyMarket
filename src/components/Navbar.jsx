import React from 'react'
import CartIcon from './../Icons/CartIcon';

import { Link, useNavigate, NavLink } from 'react-router-dom';


export default function Navbar(props) {

    const Navigate = useNavigate();

    const HandelNavigat = () => {

        if (true)
            Navigate("/")

    }

    // console.log("Navbar")

    return (
        <div>

            <div className="navbar bg-green-900 text-black justify-between">

                <div className="">
                    <a className="btn btn-ghost text-xl">Debuty Market</a>
                </div>

                <div className=" flex gap-6 font-bold">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to='/'> Menu</NavLink>
                    <NavLink to='/Contact' >Contactus</NavLink>
                    <NavLink to='/Prodects' >Prodects</NavLink>
                    <NavLink to='/LogIn' >Log In</NavLink>
                   {<NavLink to='/Admin' >Admin</NavLink>}
                    <NavLink to='/Test' >Test</NavLink>
                </div>


                <div className="flex-none mr-10 relative">

                <NavLink to="/cart" ><CartIcon /></NavLink> 

                    <span className={props.Items < 10 ? " w-5 h-5 text-lg text-center leading-5 bg-green-700 rounded-full absolute top-0 right-0 "
                        : " w-6 h-6 text-lg text-center leading-5 bg-green-700 rounded-full absolute top-0 right-0 "}>{props.Items}</span>

                </div>

            </div>

        </div>
    )
}
