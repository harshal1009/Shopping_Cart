import { createSlice } from "@reduxjs/toolkit";

// Provide an initial value for the method
const initialState = {
  method: ""
};

export const MethodSlice = createSlice({
  name: "method",
  initialState,
  reducers: {
    paymentMethod: (state, action) => {
      // Return a new state object with the updated method
      return {
        ...state,
        method: action.payload
      };
    }
  }
});

export const { paymentMethod } = MethodSlice.actions;
export default MethodSlice.reducer;
