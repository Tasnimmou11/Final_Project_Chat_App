import React from 'react'
import { Link } from 'react-router'
const Menu = () => {
  return (
    <div className=" m-auto   w-fit h-fit bg-white p-5 shadow-md shadow-gray-200 rounded-md flex flex-col">
    <ul className="w-full flex  flex-col gap-2 ">
      <Link to ="/setting"
        className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
      >
        <button
          className="p-16-semibold flex gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-gray-200 "
        >
         Settings
        </button>
      </Link>
      <Link to ="/logout"
        className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
      >
        <button
          className="p-16-semibold flex gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-gray-200 "
        >
          
          Log Out
        </button>
      </Link>
      
      
    </ul>
  </div>

  

  
  )
}

export default Menu