import { IoStar } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { TbRosetteDiscount } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Product } from "../../types/productType";
import styles from "./product.module.scss";
type PropType = {
  product: Partial<Product>;
};

function ProductCard(props: PropType) {
  const product = props.product;
  return (
    <div key={product.id} className={styles.product_card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.product_card_thumbnail}
      />

      <p className={styles.product_card_category}>{product.category}</p>
      <h3 className={styles.product_card_title}>{product.title}</h3>
      <p className={styles.product_card_brand}>{product.brand}</p>
      <p className={styles.product_card_rating}>
        <IoStar />{" "}
        <span className={styles.product_card_meta}>{product.rating}</span>
      </p>
      <p className={styles.product_card_amount}>
        <IoMdPricetags />{" "}
        <span className={styles.product_card_meta}>{product.price}</span>
      </p>
      <p className={styles.product_card_amount}>
        <TbRosetteDiscount />{" "}
        <span className={styles.product_card_meta}>
          {product.discountPercentage} %
        </span>
      </p>
      <Link className={styles.product_link} to={`/product/${product.id}`}>
        view more...
      </Link>
    </div>
  );
}

export default ProductCard;
