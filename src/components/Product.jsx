import {useState,react} from "react";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice"
import toast from "react-hot-toast";
function Product({post}){

    const{cart}=useSelector((state)=>state)
    const dispatch=useDispatch()

    function removeItem()
{
    dispatch(remove(post.id))
    toast.error("Item Removed")
}
function additem(){
   dispatch( add(post))
   toast.success("Item added")

}

    return(
        
            <div className="flex flex-col items-center justify-between w-full gap-3 p-4 rounded-xl 
            border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
            md:hover:scale-[1.05] transition ease-in">
                <div><p className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">
                    {post.title.slice(0,14)}</p></div>
                <div><p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                    {post.description.split(" ").slice(0,10).join(" ") + "..."}</p></div>
                <div  className="h-[180px]">
                    <img src={post.image} className="h-full w-full" alt=""></img>
                </div>
                <div className="flex gap-x-20">
                    <p className="text-green-600 font-semibold">${post.price}</p>

                   
                       {
                        cart.some((p)=>p.id==post.id)? (<button
                            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                            text-[12px] p-1 px-3 uppercase 
                            hover:bg-gray-700
                            hover:text-white transition duration-300 ease-in"
                            onClick={removeItem}>
                              Remove&nbsp;Item
                            </button>) :
                            (<button
                            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                            text-[12px] p-1 px-3 uppercase 
                            hover:bg-gray-700
                            hover:text-white transition duration-300 ease-in"
                            onClick={additem}>
                              Add&nbsp;to&nbsp;Cart
                            </button>)
                       }
                        
                       
                </div>

            </div>
        
    );
}
export default Product;