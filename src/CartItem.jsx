import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items); // カート内の商品を取得
  const dispatch = useDispatch();

  // カート内の合計金額を計算
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const cost = parseFloat(item.cost.replace("$", "")); // $記号を除去して数値に変換
      return total + cost * item.quantity;
    }, 0).toFixed(2);
  };

  // 商品の数量を増やす
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // 商品の数量を減らす
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  // 商品をカートから削除
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      {/* 合計金額表示 */}
      <h2 className="total_cart_amount">
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      {/* カート内の商品リスト */}
      {cart.map((item) => (
        <div className="cart-item" key={item.name}>
          {/* 商品画像 */}
          <img className="cart-item-image" src={item.image} alt={item.name} />

          {/* 商品詳細 */}
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-cost">{item.cost}</div>

            {/* 数量変更 */}
            <div className="cart-item-quantity">
              <button
                className="cart-item-button"
                onClick={() => handleDecrement(item)}
              >
                -
              </button>
              <span className="cart-item-quantity-value">
                {item.quantity}
              </span>
              <button
                className="cart-item-button"
                onClick={() => handleIncrement(item)}
              >
                +
              </button>
            </div>

            {/* 合計金額（個別商品） */}
            <div className="cart-item-total">
              Total: $
              {(parseFloat(item.cost.replace("$", "")) * item.quantity).toFixed(
                2
              )}
            </div>

            {/* 削除ボタン */}
            <button
              className="cart-item-delete"
              onClick={() => handleRemove(item)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* ショッピングを続けるボタン */}
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
