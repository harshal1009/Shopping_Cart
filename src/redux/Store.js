import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import { MethodSlice } from "./Slices/MethodSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        Method:MethodSlice.reducer,
    },
});