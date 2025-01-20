import Product from "./Product";
import { SAMPLE_PRDDUCTS } from "../data";

function ProductList() {

  return (
    <div className="product-container">
      <p className="products-heading">BUY YOUR FAVORITE PRODUCTS</p>
      {SAMPLE_PRDDUCTS.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
