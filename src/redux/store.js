import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import burgersReducer from "./slices/burgersSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    burgers: burgersReducer,
  },
});
