import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

//this is state
const initialState = {
  cartItems: [],
  totalItems: 0,
  quantity: 0,
  totalPrice:0
};

export const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log("action.payload",action.payload)
      //check, if product is existed
      const existingProduct = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      //if product existed, increase qty
      if(existingProduct){
        state.cartItems.map((item)=>{
          if(item.id === action.payload.id){
            item.qty +=1;
            state.totalItems +=1;
            
          }
        });
      } else {
        state.totalItems += 1;
        state.cartItems.push(action.payload);
      }
    },
    increaseQty: (state, action)=>{
      //if product is existed
        state.cartItems.map((item)=>{
          if (item.id === action.payload.id){
            item.qty +=1;
            state.totalItems +=1;
          }
        })
    },
    //please remember filter return new-array
    decreaseQty: (state, action)=>{
      state.cartItems.map((item)=>{
        if (item.id === action.payload.id && item.qty ===1){
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
          state.totalItems -=1;
        }else if(item.id === action.payload.id && item.qty>1){
          item.qty -=1;
          state.totalItems -=1;
        }
      })
    },
    removeAll: (state)=>{
      state.cartItems = [];
      state.totalItems =0;
      state.quantity = 0;
    }
  },
});

//export action
export const { addToCart, increaseQty, decreaseQty, removeAll } = cartSlide.actions;

//export selector
export const selectorTotalItems = (state) => state?.cart.totalItems;
export const selectCartItems = (state) => state?.cart.cartItems;
export const selectorTotalPrice = (state) => state?.cart.totalPrice;
//in case cart-reducer haven't added to store, we need add it first bcz we need select elements from store

//export reducer
export default cartSlide.reducer;
