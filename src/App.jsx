import React, { Component, useState, useEffect, useContext } from "react";
import { json, Route, Routes } from "react-router-dom";

import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer";
import Prodects from "./Pages/Prodects";
import LogIn from "./Pages/LogIn";
import Menu from "./components/Menu";
import ProtectetRout from "./components/ProtectetRout";
import UserContextProvider, { UserContext } from "./Context/UserContextProvider";
import ManyCounters from './components/ManyCounters';
import Counters from './components/Counters';
import Post from './components/Post';
import Categories from './components/Categories';
import NumToArray from './../utils/NumToArray';
import Admin from './Pages/Admin';
import ProdectForm from './Pages/ProdectForm';




export default function App() {
  
const [Test , SetTest] = useState([])

const [Catigorie , SetCatigorie] = useState([])

const [Items, SetItems] = useState([]);

const [selectedCategory, SetSelectedCategory] = useState(0)
 
const [CurrentPage , SetCurrentPage] = useState(1)

const user = useContext(UserContext)

const FilterItems = Items.filter(itm => (itm.CategorieId == selectedCategory || selectedCategory ==0))

const PageSize = 2; 

const NumOfPages = Math.ceil(FilterItems.length / PageSize);

// console.log(NumOfPages)

const Pages = NumToArray(NumOfPages);

// console.log(Pages)

const handelClick= (id)=>{
  SetSelectedCategory(id)
   SetCurrentPage(1)
}

const handelClickPagination = (PageNum)=>{

  SetCurrentPage(PageNum)
}




    useEffect(()=>{


    const FetchData = async ()=>{

      const res = await fetch("https://api.jsonbin.io/v3/b/674fb5bcad19ca34f8d52221");

      const data = await res.json();

      SetItems(data.record);

    }

      const FetchCategorie = async ()=>{

        const res = await fetch("https://api.jsonbin.io/v3/b/674fbeb5e41b4d34e45f68c9");
  
        const data = await res.json();
  
        SetCatigorie(data.record);

    }

   
    FetchCategorie();
    FetchData();

    },[])


  const HandelToggleAddToCart = (ToToggleItem) => {
    const newItems = [...Items];

    const Index = newItems.findIndex((itm) => itm.Name === ToToggleItem.Name);

    newItems[Index].IsInCart = newItems[Index].IsInCart ? false : true;

    SetItems(newItems);

   
  };

  const handleReset = () => {
    const resetItems = Items.map((item) => ({
      ...item,
      Count: 0,
    }));
    SetItems(resetItems);
  };

  const increment = (item_From_componant) => {
    const newItems = [...Items];

    const Index = newItems.findIndex((itm) => itm.Name === item_From_componant);

    newItems[Index].Count += 1;

    SetItems(newItems);
  };

  const decrement = (item_From_componant) => {
    const newItems = [...Items];

    const Index = newItems.findIndex((itm) => itm.Name === item_From_componant);

    if (newItems[Index].Count > 0) {
      newItems[Index].Count -= 1;
    }

    SetItems(newItems);
  };

  const Reset_Componant = (item_From_componant) => {
    const newItems = [...Items];

    const Index = newItems.findIndex((itm) => itm.Name === item_From_componant);

    newItems[Index].Count = 0;

    SetItems(newItems);
  };

  const handleDelet = (item_From_componant) => {
    const newItems = [...Items];

    const Index = newItems.findIndex((itm) => itm.Name === item_From_componant);

    newItems[Index].IsInCart = newItems[Index].IsInCart ? false : true;

    SetItems(newItems);
  };

  const DeletAll = () => {
    const resetItems = Items.map((item) => ({
      ...item,
      IsInCart: false,
    }));
    SetItems(resetItems);
  };

const handelAddProduct = (newProduct)=>{

  SetItems([...Items , newProduct])

}



const handelEditProduct = (EditProduct)=>{


 const newItems = [...Items];

 const index = newItems.findIndex((i)=>i.id === EditProduct.id )

 newItems[index] = EditProduct;

 SetItems(newItems)

  }


const handelDeletProduct = (IdForDelet)=>{

const CloneItems = Items.filter((item)=> !(item.id == IdForDelet))

 SetItems(CloneItems)

// console.log(CloneItems)

}

const RestoreItems = (items)=>{
  SetItems(items)
}

  let Items_length = Items.filter((item) => item.IsInCart).length;

    console.log(Items);
  return (
    <div>



      <Navbar Items={Items_length} />


      <main className=" max-w-lg m-auto ">
        <Routes>

          <Route
            path="/"
            element={
              <Menu
                Items={Items}
                Catigorie = {Catigorie}
                HandelToggleAddToCart={HandelToggleAddToCart}
                selectedCategory={selectedCategory}
                handelClick={handelClick}
                CurrentPage ={CurrentPage}
                handelClickPagination={handelClickPagination}
                FilterItems ={FilterItems}
                Pages={Pages}
                PageSize ={PageSize}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectetRout user={user}>
              <Cart
                Items={Items.filter((item) => item.IsInCart)}
                DeletAll={DeletAll}
                handleReset={handleReset}
                increment={increment}
                decrement={decrement}
                Reset_Componant={Reset_Componant}
                handleDelet={handleDelet}
               
              />
              </ProtectetRout>
            }
          />

          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Prodects/:id?" element={<Prodects />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Test" element={<Post />} />
          <Route path="/Admin" element={<Admin RestoreItems={RestoreItems} Items={Items} Catigorie={Catigorie} handelDeletProduct={handelDeletProduct}/>} />
          <Route path="/Prodect/:id"
           element={<ProdectForm Catigorie = {Catigorie} Items={Items} handelAddProduct={handelAddProduct}
           handelEditProduct={handelEditProduct}
           />} />
       
        </Routes>
      </main>
      
    {/* <Footer /> */}
    </div>
  );
}
