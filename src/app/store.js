import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "../features/shopping-cart/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
  },
});
