import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidMessageDots } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { Link,useLocation } from 'react-router';

const Navbar = () => {
  const location = useLocation().pathname;
  return (
    /* From Uiverse.io by sahilxkhadka */
    <div className="flex flex-col">
      <div className="text-center mt-3 mb-6 bg-gradient-to-r to-brand from-indigo-500 bg-clip-text text-transparent text-3xl font-black">
        ChatApp
      </div>
      <div className= "border border-gray-300 py-3 flex gap-10 shadow-md mx-auto rounded-md ">
        <div className="group relative px-4 cursor-pointer">
          <Link
            to="/"
            className={`flex h-10 w-10 items-center justify-center ${location == "/" ? "bg-gray-200" : ""} rounded-full hover:bg-gray-200`}
          >
            <FaHome className="w-6 h-6 hover:text-brand" />
          </Link>
        </div>
        <div className="group relative px-4 cursor-pointer">
          <Link
            to="/chat"
            className={`flex h-10 w-10 items-center justify-center ${location == "/chat" ? "bg-gray-200" : ""}  rounded-full hover:bg-gray-200`}
          >
            <BiSolidMessageDots className="w-6 h-6 hover:text-brand" />
          </Link>
        </div>
        <div className="group relative px-4 cursor-pointer">
          <Link
            to="/profile"
            className={`flex h-10 w-10 items-center justify-center ${location == "/profile" ? "bg-gray-200" : ""} rounded-full hover:bg-gray-200`}
          >
            <CgProfile className="w-6 h-6 hover:text-brand" />
          </Link>
        </div>
        <div className=" group relative px-4 cursor-pointer">
          <Link
            to="/logout"
            className={`flex h-10 w-10 items-center justify-center ${location == "/logout" ? "bg-gray-200" : ""} rounded-full hover:bg-gray-200`}
          >
            <IoLogOut className="w-6 h-6 hover:text-brand" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
