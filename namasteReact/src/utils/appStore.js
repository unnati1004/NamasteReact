import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./createSlice";

const appStore = configureStore({
   reducer:{
          cart: cartReducer,
          // user: userReducer,
   }       
});

export default appStore;