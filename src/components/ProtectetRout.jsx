import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import LogIn from './../Pages/LogIn';

export default function ProtectetRout(props) {


  //  console.log(props.user)

     if (!props.user) {
       return <Navigate to="/LogIn"/>
       }
   
  return (
    <div>{props.children}</div>
  )
}
