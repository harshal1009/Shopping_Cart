import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../logo.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar(){

  const {cart}=useSelector((state)=>state)

 return (
    <div className="flex justify-between w-10/12 h-[80px]  bg-richblack-800 ">

     <NavLink to={'/ '}> <div className="w-[170px] mt-[10px] h-[30px] ">
      <img src={logo}></img>
      </div></NavLink>

      <div className="flex justify-center gap-5 items-center ">
        <NavLink to={'/'}><p className="font-semibold text-white text-md hover:text-green-500 transition-all ease-in duration-150">Home</p></NavLink>

        <NavLink to={"/cart"}>
         <div className="relative">
         <FaShoppingCart  className="text-white text-[25px]  hover:text-green-500 transition-all ease-in duration-150"/>
        {cart.length>0 &&
          <div className="absolute -top-1 -right-2  text-xs w-5 h-5 flex 
          justify-center items-center bg-green-500 animate-bounce rounded-full text-white ">{cart.length}</div>
        }
         </div>
        </NavLink>
      </div>


    </div>

 );
}
export default Navbar;