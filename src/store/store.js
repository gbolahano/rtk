import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../component/products/productSlice";
import cartReducer from "../component/cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  },
});

export default store;
