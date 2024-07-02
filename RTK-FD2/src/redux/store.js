import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./feature/counter/counterSlice";
import productSlice from "./feature/product/productSlice";
import cartSlide from "./feature/cart/cartSlide";

export const store = configureStore({
  reducer: {
    counter: countSlice,
    product: productSlice,
    cart: cartSlide
  }
});
