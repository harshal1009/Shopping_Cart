import React, { useEffect, useState } from "react";
import Product from "../components/Product"
import Spinner from "../components/Spinner"
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loader,setLoader]=useState(false)
  const[posts,setPosts]=useState([])
  async function fetchData(){
    try{
      setLoader(true)
      const response= await fetch(API_URL)
      const data=await response.json()
      setPosts(data)
    }
    catch(error){
      console.log("error in fetching api")

    }
    setLoader(false)
  }
useEffect(()=>{
  fetchData();
},[])

  return(
    <div>
     {
      loader? (<Spinner/>):(posts.length?(
       <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
       gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh] ">{
        posts.map((post)=>(
          <Product post={post} key={post.id}/>
        ))
       }
        
       </div>
      ): (<div>No post found</div>))
     }
    </div>
  );
  
}
  
export default Home;
