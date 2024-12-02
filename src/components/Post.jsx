
import axios from "axios";

import React, { useEffect, useState } from "react";
import LoadingIcon from "./../Icons/LoadingIcon";
import { useFetchPost } from "../hooks/useFetchPost";
export default function Post() {
 

  const {id,error,IsLoading,Post,HandelSearchValue}=useFetchPost()
  
  return (
    <div>

      <div className=" ml-8 mb-7 mt-6 ">
        {" "}
        <input
        autoFocus
          value={id}
          onChange={HandelSearchValue}
          type="text"
          placeholder="Searsh..."
          className="p-3 w-fit"
        />
      </div>

    {IsLoading && <LoadingIcon/>}

     {error&&<p>There Is No Posts</p>}

  { !IsLoading && !error && <p className=" ml-8"> {Post?.title} </p> }
    
    </div>
  );
}
