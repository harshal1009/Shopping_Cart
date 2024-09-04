import React from 'react'
import { useSelector } from 'react-redux';
import qr from './WhatsApp Image 2024-05-03 at 02.13.35_0bcb0d28.jpg'
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
const PaymentForm = () => {

   const {Method}=useSelector((state)=>state)
   function clickHandler(){
    toast.success("order Placed")
   }
   
    console.log(Method)

if(Method.method=="1"){
    return(
        <div className='flex justify-center flex-col items-center gap-y-5 mb-10 '>
            <img className='h-[350px] mt-10 w-[300px] mb-10'  src={qr}></img>
           <NavLink to={'/'}> <button onClick={clickHandler} className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300 ">Done</button></NavLink>
        </div>
    );
}
else if(Method.method=="2"){
    return(

   <div className='flex  h-[500px] justify-center items-center'>
     <form className=" border-2 p-6  rounded-md gap-2 w-[360px]">
    <div className="text-xl font-semibold text-gray-600 border-b-2 border-gray-500 w-">
        <h4 className="title">Credit card detail</h4>
    </div>
 
  <div className="form-body">
  
    <input type="text" className="border-2 border-gray-300 mt-3 w-full mb-[20px] h-[40px] pl-[20px] rounded-[6px]" placeholder="Card Number"/>
 
   
    <div className="flex flex-row gap-x-3">
      <div className="border-2 border-gray-300 w-1/2 h-[40px] text-center items-center flex mb-[20px] pl-[20px] rounded-[6px]" >
        <select name="Month">
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>
      <div className="border-2 border-gray-300 w-1/2 h-[40px] text-center items-center flex mb-[20px] pl-[20px] rounded-[6px]"  >
        <select name="Year">
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
 
    
    <div className='flex flex-row gap-x-2 '>
      <div className="border-2 justify-center border-gray-300 w-1/2 h-[40px] text-center items-center flex mb-[20px] pl-[20px] rounded-[6px]" >
        <input  className='w-full pr-2' type="text" placeholder="CVV"/>
      </div>
      <div class="cvv-details">
        <p className='text-sm text-gray-400 '>3 or 4 digits usually found on the signature strip</p>
      </div>
    </div>
 
    
    <div className='flex flex-col gap-y-4'>
    <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300"  >Proceed</button>

    <button className="bg-[#8080FF] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#7171ff] border-2 hover:bg-white hover:text-[#5c6cf7] ease-in transition-all duration-300">Pay With PAYPAl</button>
    </div>
  </div>
</form>
   </div>

    );
}
else{
    return(
      <div className='flex  h-[500px] justify-center items-center'>
      <form className=" border-2 p-6  rounded-md gap-2 w-[360px]">
     <div className="text-xl font-semibold text-gray-600 border-b-2 border-gray-500 w-">
         <h4 className="title">Debit card detail</h4>
     </div>
  
   <div className="form-body">
   
     <input type="text" className="border-2 border-gray-300 mt-3 w-full mb-[20px] h-[40px] pl-[20px] rounded-[6px]" placeholder="Card Number"/>
  
    
     <div className="flex flex-row gap-x-3">
       <div className="border-2 border-gray-300 w-1/2 h-[40px] text-center items-center flex mb-[20px] pl-[20px] rounded-[6px]" >
         <select name="Month">
           <option value="january">January</option>
           <option value="february">February</option>
           <option value="march">March</option>
           <option value="april">April</option>
           <option value="may">May</option>
           <option value="june">June</option>
           <option value="july">July</option>
           <option value="august">August</option>
           <option value="september">September</option>
           <option value="october">October</option>
           <option value="november">November</option>
           <option value="december">December</option>
         </select>
       </div>
       <div className="border-2 border-gray-300 w-1/2 h-[40px] text-center items-center flex mb-[20px] pl-[20px] rounded-[6px]"  >
         <select name="Year">
           <option value="2016">2016</option>
           <option value="2017">2017</option>
           <option value="2018">2018</option>
           <option value="2019">2019</option>
           <option value="2020">2020</option>
           <option value="2021">2021</option>
           <option value="2022">2022</option>
           <option value="2023">2023</option>
           <option value="2024">2024</option>
         </select>
       </div>
     </div>
  
     
     <div className='flex flex-row gap-x-2 '>
       <div className="border-2 justify-center border-gray-300 w-1/2 h-[40px] text-center items-center flex mb-[20px] pl-[20px] rounded-[6px]" >
         <input  className='w-full pr-2' type="text" placeholder="CVV"/>
       </div>
       <div class="cvv-details">
         <p className='text-sm text-gray-400 '>3 or 4 digits usually found on the signature strip</p>
       </div>
     </div>
  
     
     <div className='flex flex-col gap-y-4'>
     <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
         border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300"  >Proceed</button>
 
     <button className="bg-[#8080FF] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
         border-[#7171ff] border-2 hover:bg-white hover:text-[#5c6cf7] ease-in transition-all duration-300">Pay With PAYPAl</button>
     </div>
   </div>
 </form>
    </div>
    );
}

}

export default PaymentForm
