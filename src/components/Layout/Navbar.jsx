import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { TbMessageDots } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router';

const Navbar = () => {
  return (
    /* From Uiverse.io by sahilxkhadka */
    <div className="flex flex-col">
      <div className="text-center mt-3 mb-6 bg-gradient-to-r to-brand from-indigo-500 bg-clip-text text-transparent text-3xl font-black">
        ChatApp
      </div>
      <div className="border border-gray-300 py-3 flex gap-10 shadow-md mx-auto rounded-md">
        <div className="group relative px-4 cursor-pointer">
          <Link
            to="/"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200"
          >
            <AiOutlineHome className="w-6 h-6 hover:text-brand" />
          </Link>
        </div>
        <div className="group relative px-4 cursor-pointer">
          <Link
            to="/chat"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200"
          >
            <TbMessageDots className="w-6 h-6 hover:text-brand" />
          </Link>
        </div>
        <div className="group relative px-4 cursor-pointer">
          <Link
            to="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200"
          >
            <CgProfile className="w-6 h-6 hover:text-brand" />
          </Link>
        </div>
        <div className=" group relative px-4 cursor-pointer">
          <Link
            to="/menu"
            className="  flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200"
          >
            <HiBars3 className="w-6 h-6 hover:text-brand" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
