import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchPost(params) {
    const [id, Setid] = useState("");

    const [Post, SetPost] = useState(null);
  
    const [IsLoading, SetLoading] = useState(false);
  
  const [error , SeteError] = useState(false)
  
    const HandelSearchValue = (E) => {
      Setid(E.target.value);
    };
  
    useEffect(() => {
      const FetchData = async () => {
      try{  SetLoading(true);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        SetPost(data);
        SeteError(false)
      } catch (Error){
  
          SeteError(true)
       } finally{
          SetLoading(false);
       }
  
        
      };
      
  if(id)FetchData();
  
    }, [id]);
  
return{id,Post,IsLoading,error,HandelSearchValue}

}