import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.totalQuantity;
  return (
    <nav className="navbar">
      <h2 className="nav-header">My Online Shopping Site</h2>
      <div className="nav-btn">
        My Cart
        <span className="item-span">{totalQuantity}</span>
      </div>
    </nav>
  );
}

export default Navbar;
