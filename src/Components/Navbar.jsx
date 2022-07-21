import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handelNav =()=>{
        setNav(!nav)
    }
  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className=" md:block md:flex uppercase">
        <li className="p-4 cursor-pointer ">Home</li>
        <li className="p-4 cursor-pointer ">Company</li>
        <li className="p-4 cursor-pointer ">Recourses</li>
        <li className="p-4 cursor-pointer ">About </li>
        <li className="p-4 cursor-pointer ">Contact</li>
      </ul>
      <div className="block md:hidden">
        {!nav ? <AiOutlineClose onClick={()=>handelNav()} className="cursor-pointer" size={20} /> : <AiOutlineMenu onClick={()=>handelNav()} className="cursor-pointer" size={20} /> }
      </div>
      <div className={ !nav ? `ease-in-out duration-500 fixed top-0 left-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300]` : 'fixed left-[-100%] ease-outout duration-500'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-5">REACT.</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-b-gray-600 cursor-pointer ">Home</li>
          <li className="p-4 border-b border-b-gray-600 cursor-pointer ">Company</li>
          <li className="p-4 border-b border-b-gray-600 cursor-pointer ">Recourses</li>
          <li className="p-4 border-b border-b-gray-600 cursor-pointer ">About </li>
          <li className="p-4 border-b border-b-gray-600 cursor-pointer ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
