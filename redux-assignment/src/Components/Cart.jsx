import "./Navbar.scss";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.totalQuantity;
  
  return (
    <div className="cart-main">
      <h4 className="cart-heading">Your Shopping Cart</h4>
      {cart.items.map((item) => (
        <CartItems name="Man Perfume" {...item} />
      ))}
    </div>
  );
}

export default Cart;
