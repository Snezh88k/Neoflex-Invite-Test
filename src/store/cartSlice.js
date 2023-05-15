import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
  allCount: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count += action.payload.count;
      } else {
        state.items.push({
          ...action.payload,
        });
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.allCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
    reduceQuantity(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count -= 1;
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.allCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
  },
});

export const { addItem, reduceQuantity } = counterSlice.actions;

export default counterSlice.reducer;
