import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function About() {

  const navigator = useNavigate();



// console.log("About")

    return (


        <div className="flex gap-6 font-bold">
            About
            <Link to={"/"}>App</Link>
        
        </div>
    )
}
