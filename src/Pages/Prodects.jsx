import React,{useEffect} from 'react'
import { useParams, Link, useSearchParams, useLocation,Route, Routes } from 'react-router-dom'


export default function Prodects() {


    // console.log("Test")
    return (
        <div>
           <div className='flex justify-center mt-10'>Prodects :  &ensp; <Link to={`/Prodects/${"Burger"}`} className='text-red-600'>Burger</Link>
                &ensp;  , &ensp; <Link to={`/Prodects/${"Fries"}`}>Fries</Link> &ensp; and &ensp; <Link to={`/Prodects/${"Water"}`}> Water</Link> </div>

        </div>
    )
}
