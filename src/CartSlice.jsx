import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // カート内のアイテムを保持
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions; // アクションクリエーターをエクスポート
export default cartSlice.reducer; // リデューサーをエクスポート
