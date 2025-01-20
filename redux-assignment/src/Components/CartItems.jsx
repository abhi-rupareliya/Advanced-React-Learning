import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

function CartItems(item) {
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(addToCart(item));
  }

  function handleDecrement() {
    dispatch(removeFromCart(item.id));
  }

  return (
    <div className="cart-item-main">
      <div className="cart-product-details">
        <p className="cart-product-name">{item.title}</p>
        <div className="cart-product-price">
          <p>${item.price * item.quantity}</p>
          <span className="cart-product-price-suffix">
            (${item.price}/item)
          </span>
        </div>
      </div>

      <div className="cart-item-actions">
        <div className="qty">
          <span className="qty-prefix">x</span>
          {item.quantity}
        </div>
        <div className="cart-btns">
          <button className="action-btn" onClick={handleDecrement}>
            -
          </button>
          <button className="action-btn" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
