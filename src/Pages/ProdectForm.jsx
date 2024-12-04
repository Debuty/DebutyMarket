import React, { useEffect, useState } from "react";
import Categories from "./../components/Categories";
import axios from "../api";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {toast} from "react-toastify"
import LoadingIcon from './../Icons/LoadingIcon';

export default function ProdectForm({ Catigorie, Items , handelAddProduct , handelEditProduct}) {

const navigate = useNavigate();

const {id} = useParams();

const Mode = id ===  "New" ? "Add" :"Edit";




 const [Form, SetForm] = useState( Mode === "Add" ?{

   Name: "",
 
    price: "",
 
    CategorieId: "1",
 
   } : Items.find(i => i.id == id));


   

 useEffect(()=>{ Mode==="Edit"&& SetForm( Items.find(i => i.id == id) ) } , [Items])

  const HandelChangeValueForm = (e) => {
    SetForm({ ...Form, [e.target.name]: e.target.value });
  };

  const HandelSubmit = (e) => {
    e.preventDefault();

  
//     const AddProdectToApi = async ()=>{


//   const {data} = await  axios.post("products",{...Form , price: +Form.price , CategorieId: +Form.CategorieId ,isInCart:false })


//    console.log(data)


//  navigate("/Admin")


// }


if(Mode === "Add"){

  AddItemsToApi(); 

  toast.success("Add !" , {position:"bottom-right"});

  navigate("/Admin")
}

else {

  EditItemsToApi()

  toast.success("Edit !" , {position:"bottom-right"});
  
  navigate("/Admin")

}

  };

  const AddItemsToApi = () => {
    const postData = {
      Name: Form.Name,
      isInCart: false,
      Count: 1,
      price: +Form.price,
      CategorieId: +Form.CategorieId,
      All: 0,
    };

    fetch("Test-1.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON format
      },
      body: JSON.stringify(postData), // Convert JavaScript object to JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create item. Status: " + response.status);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Item created successfully:", data); // Output the response
      })
      .catch((error) => {
        console.error("Error:", error); // Handle any errors
      });

      handelAddProduct(postData)  
  };




  const EditItemsToApi = () => {
    const postData = {...Form , CategorieId: +Form.CategorieId , price : +Form.price};

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Specify JSON format
      },
      body: JSON.stringify(postData), // Convert JavaScript object to JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create item. Status: " + response.status);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Item Edit successfully:", data); // Output the response
      })
      .catch((error) => {
        console.error("Error:", error); // Handle any errors
      });

      handelEditProduct(postData)

  };


 if(Items.length == 0){
   return <LoadingIcon/>
 }
 
  return (
    <form onSubmit={HandelSubmit}>

      <div className="flex gap-2 items-center mt-28">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          className="input-sm input-primary border h-8 input-bordered"
          value={ Form? Form.Name : "Error" }
          onChange={HandelChangeValueForm}
        />
      </div>

      <div className="flex gap-2 items-center mt-10">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          className="input-sm input-primary  h-8 border input-bordered"
          value={Form ? Form.price : "Error" }
          onChange={HandelChangeValueForm}
        />
      </div>

      <div className="flex gap-2 items-center mt-10">
        <label htmlFor="Categories">Categories</label>
        <select
          name="CategorieId"
          id="Categories"
          className="select select-bordered w-full max-w-xs outline-none"
          onChange={HandelChangeValueForm}
          value={ Form ? Form.CategorieId : "Error" }
        >
          {Catigorie.map((item) => {
            if (item.name != "All")
              return (
                <option className="text-blue-500" value={item.id} key={item.id}>
                  {item.name}
                </option>
              );
          })}
        </select>
      </div>

      <button className="btn btn-primary btn-sm mt-10">{Mode} </button>
    </form>
  );
}
