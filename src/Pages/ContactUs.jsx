import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/UserContextProvider';

export default function ContactUs() {

   const {state} = useLocation();

// const x = useContext(UserContext)
// console.log(x)

    return (
        <div className='flex gap-6 font-bold'>
            ContactUs
            <Link to={"/"}>App</Link>

 {state}
        </div>
    )
}
