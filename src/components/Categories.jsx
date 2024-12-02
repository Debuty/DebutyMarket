import React from 'react'

export default function Categories({Catigorie , selectedCategory , handelClick}) {
    

    
  return (
    <div className='border-b-2 border-slate-700'>
        {Catigorie.map(item=>{
        
        
       if(selectedCategory == item.id) 
        return   <div key={item.id} className='bg-slate-300 text-center border-2 border-b-0 border-slate-700 cursor-pointer'>{item.name}</div>
         else
         return  <div onClick={()=>handelClick(item.id)} key={item.id} className='text-center border-2 border-b-0 border-slate-700 cursor-pointer'>{item.name}</div>
})}
    </div>
  )
}   
