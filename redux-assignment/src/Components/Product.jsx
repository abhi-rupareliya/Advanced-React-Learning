import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Product({ id, price, title, description }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="row1">
        <p className="product-name">{title}</p>
        <p className="product-price">${price}</p>
      </div>
      <div className="row2">
        <p className="sub-brand">{description}</p>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id,
                title,
                price,
                description,
              })
            )
          }
          className="add-cart-btn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
