import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // CartSlice のリデューサーをインポート

const store = configureStore({
  reducer: {
    cart: cartReducer, // カートリデューサーを登録
  },
});

export default store;
