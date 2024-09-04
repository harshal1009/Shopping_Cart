import React from "react";
import { NavLink, Navigate } from "react-router-dom";
function PrivateRoute({cart,children}){

        {
        if (cart.length > 0){

            return children;
        }
        else{
            return <Navigate to={"/"}></Navigate>
        }
    }
    
}
export default PrivateRoute;