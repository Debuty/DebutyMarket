import React from 'react'



export default function Pagination ({CurrentPage,handelClickPagination,Pages}) {


  return (
    <div className='flex gap-10 justify-center mt-5 mb-10'>
         {Pages.length > 1 && Pages.map(Page =>(
             
             
           <div onClick={()=>handelClickPagination(Page)} className={"flex justify-center cursor-pointer items-center w-6 h-6 border border-slate-700 " + 
            (CurrentPage === Page ? " bg-slate-300":"")
           } 
           key={Page} > 
           {Page}
           </div>

    ))}
    </div>
  )
}
