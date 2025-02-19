import React from 'react'
import { MdOutlineWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { IoHomeSharp } from "react-icons/io5";

const Profile = () => {
  return (
    <div className="relative w-[500px] h-[560px] mt-8 flex flex-col items-center rounded-2xl bg-white shadow-lg m-auto">
      {/* Background Image */}
      {/* <div className="w-full  h-[210px] rounded-t-2xl bg-gray-300"> */}
          <img src="1.png" alt="" className='w-full h-[210px]' />
      {/* </div> */}

      {/* Avatar */}
      <div className="absolute top-1/3 -translate-y-1/2 w-[130px] h-[130px] bg-white rounded-full flex justify-center items-center shadow-md">
        
          <img src="user1.png" alt="" className="w-[120px] h-[120px] bg-gray-400 rounded-full" />
        
      </div>

      {/* Text Content */}
      <h2 className="mt-12 text-lg font-medium text-black">Pawlo Mora </h2>
      <p className="mt-2 text-sm text-gray-500">Software Engineer</p>

      {/* Buttons */}
      <div className="mt-4  flex flex-col gap-2">
        <div className='flex items-center gap-2'>
        <MdOutlineWork className='text-gray-500'/>
        <h2 className='text-sm'> Works at <span className='font-medium'>Software company</span> </h2>
        </div>

        <div className='flex items-center gap-2'>
        <GiGraduateCap className='text-gray-500'/>
        <h2 className='text-sm'>Studied at <span className='font-medium'>Canada University</span> </h2>
        </div>
         
         <div className='flex items-center gap-2'>
         <IoHomeSharp className='text-gray-500' />
        <h2 className='text-sm'>Lives in <span className='font-medium'>Canada</span> </h2>
        </div>
      </div>
    </div>
  )
}

export default Profile