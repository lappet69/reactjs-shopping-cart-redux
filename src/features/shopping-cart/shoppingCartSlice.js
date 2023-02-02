import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../../dummy";
const initialState = {
  cart: dummyData,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[itemIndex].quantity = action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      console.log(action);
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.cart.splice(itemIndex, 1);
      }
    },
  },
});

export const { updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const countTotalQuantity = (cart) =>
  cart.reduce((total, item) => total + item.quantity, 0);

export const countTotalPrice = (cart) =>
  parseFloat(
    cart.reduce((total, item) => total + item.price * item.quantity, 0)
  ).toFixed(2);

export const countPrice = (price, qty) => {
  return parseFloat((price * qty).toFixed(2));
};
