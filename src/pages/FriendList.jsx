import React from 'react'
import { GoSearch } from "react-icons/go";

const FriendList = () => {
  return (
    <div className=' w-[700px] shadow-md  m-auto '>
          <div className='flex mt-8 items-center justify-between' >
          <div className='flex flex-col '>
            <h1 className='font-bold text-2xl w-1/2 ml-10'>FriendList</h1></div>
          <div className='flex items-center p-2 border rounded-xl w-1/2 mr-5'>
          <GoSearch />
          <input type="text" placeholder='Search'/>
          </div>
          </div>
        
        <div className=' mt-10    overflow-y-auto h-[580px]'>
          <div className='flex shadow-sm  justify-between'>
           
              <div className='flex items-center'>
              <img src="user3.png" alt="user" className='w-[80px] h-[80px] ml-10 my-2 rounded-full'/>
              
            
              <h2 className='text-lg font-medium ml-5'>David Willson</h2>
              </div>
         
            <div className='flex flex-row '>
               <div className='flex items-center gap-2 '>
               <button className=" bg-blue-50  text-black text-sm py-2 px-4 rounded-sm hover:bg-gray-300 ">Unriend</button>
               <button className="bg-blue-50   text-black text-sm  py-2 px-6 mr-12 rounded-sm hover:bg-gray-300">Block</button>
               </div>
            </div>
            </div>

          <div className='flex shadow-sm  justify-between'>
           
           <div className='flex items-center'>
           <img src="user3.png" alt="user" className='w-[80px] h-[80px] ml-10 my-2 rounded-full'/>
           
         
           <h2 className='text-lg font-medium ml-5'>David Willson</h2>
           </div>
      
         <div className='flex flex-row '>
            <div className='flex items-center gap-2 '>
            <button className=" bg-blue-50  text-black text-sm py-2 px-4 rounded-sm hover:bg-gray-300 ">Unriend</button>
            <button className="bg-blue-50   text-black text-sm  py-2 px-6 mr-12 rounded-sm hover:bg-gray-300">Block</button>
            </div>
         
         </div>

       </div>

       <div className='flex shadow-sm  justify-between'>
           
           <div className='flex items-center'>
           <img src="user3.png" alt="user" className='w-[80px] h-[80px] ml-10 my-2 rounded-full'/>
           
         
           <h2 className='text-lg font-medium ml-5'>David Willson</h2>
           </div>
      
         <div className='flex flex-row '>
            <div className='flex items-center gap-2 '>
            <button className=" bg-blue-50  text-black text-sm py-2 px-4 rounded-sm hover:bg-gray-300 ">Unriend</button>
            <button className="bg-blue-50   text-black text-sm  py-2 px-6 mr-12 rounded-sm hover:bg-gray-300">Block</button>
            </div>
         
         </div>

       </div>

       <div className='flex shadow-sm  justify-between'>
           
           <div className='flex items-center'>
           <img src="user3.png" alt="user" className='w-[80px] h-[80px] ml-10 my-2 rounded-full'/>
           
         
           <h2 className='text-lg font-medium ml-5'>David Willson</h2>
           </div>
      
         <div className='flex flex-row '>
            <div className='flex items-center gap-2 '>
            <button className=" bg-blue-50  text-black text-sm py-2 px-4 rounded-sm hover:bg-gray-300 ">Unriend</button>
            <button className="bg-blue-50   text-black text-sm  py-2 px-6 mr-12 rounded-sm hover:bg-gray-300">Block</button>
            </div>
         
         </div>

       </div>

       <div className='flex shadow-sm  justify-between'>
           
           <div className='flex items-center'>
           <img src="user3.png" alt="user" className='w-[80px] h-[80px] ml-10 my-2 rounded-full'/>
           
         
           <h2 className='text-lg font-medium ml-5'>David Willson</h2>
           </div>
      
         <div className='flex flex-row '>
            <div className='flex items-center gap-2 '>
            <button className=" bg-blue-50  text-black text-sm py-2 px-4 rounded-sm hover:bg-gray-300 ">Unriend</button>
            <button className="bg-blue-50   text-black text-sm  py-2 px-6 mr-12 rounded-sm hover:bg-gray-300">Block</button>
            </div>
         
         </div>

       </div>

       <div className='flex shadow-sm  justify-between'>
           
           <div className='flex items-center'>
           <img src="user3.png" alt="user" className='w-[80px] h-[80px] ml-10 my-2 rounded-full'/>
           
         
           <h2 className='text-lg font-medium ml-5'>David Willson</h2>
           </div>
      
         <div className='flex flex-row '>
            <div className='flex items-center gap-2 '>
            <button className=" bg-blue-50  text-black text-sm py-2 px-4 rounded-sm hover:bg-gray-300 ">Unriend</button>
            <button className="bg-blue-50   text-black text-sm  py-2 px-6 mr-12 rounded-sm hover:bg-gray-300">Block</button>
            </div>
         
         </div>

       </div>

       <div className='flex shadow-sm  justify-between'>
           
           <div className='flex items-center'>
           <img src="user3.png" alt="user" className='w-[80px] h-[80px] ml-10 my-2 rounded-full'/>
           
         
           <h2 className='text-lg font-medium ml-5'>David Willson</h2>
           </div>
      
         <div className='flex flex-row '>
            <div className='flex items-center gap-2 '>
            <button className=" bg-blue-50  text-black text-sm py-2 px-4 rounded-sm hover:bg-gray-300 ">Unriend</button>
            <button className="bg-blue-50   text-black text-sm  py-2 px-6 mr-12 rounded-sm hover:bg-gray-300">Block</button>
            </div>
         
         </div>

       </div>

          
    
    </div> 
    </div>    
  )
}

export default FriendList