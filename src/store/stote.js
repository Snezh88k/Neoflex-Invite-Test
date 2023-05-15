import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./cartSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
