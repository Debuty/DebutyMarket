import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from './../Icons/CartIcon';
import Delet from './../Icons/Delet';
import { toast} from "react-toastify"
export default function Admin({Items,Catigorie , handelDeletProduct,RestoreItems}) {


  const handelDelet = (IdForDelet)=>{

// console.log(IdForDelet)

toast.error("An item cannot be deleted", {
  position: "top-center"
});

// const CurrentItems = Items;

//     handelDeletProduct(IdForDelet)

//     fetch(`http://localhost:3000/products/${IdForDelet}`, { 
//       method: "DELETE", 
//       headers: {
//         "Content-Type": "application/json", 
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to delete item. Status: " + response.status);
//         }
//         return response.json(); 
//       })
//       .then((data) => {
//         console.log("Item deleted successfully:", data); 
//         toast.info("Deleted !", {
//           position: "bottom-right"
//         });
  
//       })
//       .catch((error) => {
//         console.error("Error:", error); 
//         RestoreItems(CurrentItems)
//         toast.error("Deleted faeld !", {
//           position: "bottom-right"
//         });
//       });

      
  
    
  }
    
  return (
    <div className='mt-10'>

<Link to={"/Prodect/New"} className='btn btn-primary btn-sm float-end'>Add Items</Link>

         <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>price</th>
          <th>Catigorie</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {Items.map((item) => (
    

            <tr key={item.id} >
            <td>{item.Name}</td>
            <td>{item.price}</td>
              <td>  {Catigorie.find((c) => c.id == item.CategorieId).name || "Unknown"} </td> 
              <td> <button onClick={()=>handelDelet(item.id)} className='btn btn-error btn-s bg-red-600'><Delet/></button></td>
              <td> <Link to={`/Prodect/${item.id}`} className='btn btn-square btn-s bg-blue-600 '>Edit</Link></td>
          </tr>
          
        ))} 

      </tbody>
    </table>
    </div>
  )
}
