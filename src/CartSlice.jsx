import { createSlice } from '@reduxjs/toolkit';

// 初期状態
const initialState = {
  items: [], // カート内のアイテムを保持
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // カートにアイテムを追加
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    // カートからアイテムを削除
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    // アイテムの数量を更新
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        if (quantity > 0) {
          itemToUpdate.quantity = quantity;
        } else {
          // 数量が0以下の場合、アイテムをカートから削除
          state.items = state.items.filter((item) => item.name !== name);
        }
      }
    },
  },
});

// アクションクリエーターをエクスポート
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// リデューサーをエクスポート
export default cartSlice.reducer;
