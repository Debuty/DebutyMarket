import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/UserContextProvider';

export default function ContactUs() {

   const {state} = useLocation();

   console.log(state)

   

    return (
        <div className='flex gap-6 font-bold'>
         

         
        </div>
    )
}
