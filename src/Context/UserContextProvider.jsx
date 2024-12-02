import React, { createContext, useState } from 'react'



 export const UserContext = createContext(null)

export default function UserContextProvider(props) {

   
// console.log(props)

const [User , SetUser] = useState({name:"Debuty" , isAdmin : true , isSuperAdmin : false})


  return (
    <div>

 <UserContext.Provider value={User}>{props.children}</UserContext.Provider>

    </div>
  )
}
