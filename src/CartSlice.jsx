import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addItem } = CartSlice.actions;
export default CartSlice.reducer;
