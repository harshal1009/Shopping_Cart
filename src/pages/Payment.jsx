import React from "react";
import {useState} from 'react'
import { MdOutlinePayment ,MdOutlinePayments } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PaymentForm from "../components/PaymentForm";
import { useDispatch, useSelector } from "react-redux";
import {paymentMethod} from "../redux/Slices/MethodSlice"

function Payment(props ){

    const cart=props.cart
    const{method}=useSelector((state)=>state)
    const dispatch=useDispatch()

   
     

     function changeHandler(event){

        const value=event.target.value
        dispatch(paymentMethod(value))
       
       
    }
   
 
    
   
    

    


       
    return(
        <form   >
            <div className="flex items-center justify-center h-[calc(100vh-100px)]">
            <div className="flex gap-6 flex-col items-center  rounded-xl p-10 border-2 border-gray-200 hover:scale-[1.03] transition-all ease-in duration-150">
                <p className="font-bold text-green-500 text-2xl ">
                    Select Payment Method
                </p>
                <div >

        <input type='radio' onChange={changeHandler} name='method' id='pushNotification' value="1"></input>
        <label htmlFor='pushNotification' className="text-xl font-semibold"><FaGooglePay className="text-xl font-semibold"/> Via UPI</label>
        <br></br>
       
        <input type='radio' onChange={changeHandler} name='method' id='pushNotification' value="2"></input>
        <label htmlFor='pushNotification' className="text-xl font-semibold" ><MdOutlinePayment className="text-xl font-semibold" /> Credit Card</label>
        <br></br>
        <input type='radio' onChange={changeHandler} name='method' id='pushNotification' value="3"></input>
        <label htmlFor='pushNotification'className="text-xl font-semibold" ><MdOutlinePayments className="text-xl font-semibold" /> Debit Card</label>

                </div>
               <NavLink  to={"/PaymentForm"}>
               <button  className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">Confirm</button>
                
               </NavLink>
            </div>
        </div>
        </form>
    );
}
export default Payment;