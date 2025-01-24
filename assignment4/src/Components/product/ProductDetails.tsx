import { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types/productType";
import Image from "../Ui/Image";
import Loading from "../Ui/Loading";
import ImageModal from "../Ui/ImageModal";
import styles from "./productDetail.module.scss";

const ProductPage = () => {
  const [product, setProduct] = useState({} as Product);
  const [currentImage, setCurrentImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

  const API = `https://dummyjson.com/products/${id}`;

  async function fetchProduct() {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  function handleImageClick(e: MouseEvent<HTMLImageElement>) {
    const img = e.target as HTMLImageElement;
    setCurrentImage(img.src);
    setIsModalOpen(true);
  }

  function CloseModal() {
    setIsModalOpen(false);
  }
  if (!Object.keys(product).length) return <Loading />;

  return (
    <>
      <ImageModal
        src={currentImage}
        alt="image"
        isOpen={isModalOpen}
        closeModal={CloseModal}
      />
      <div className={styles.container}>
        {/* Product Hero Section */}
        <div className={styles.hero}>
          <div className={styles.thumbnail_container}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.thumbnail}
            />
          </div>

          <div className={styles.heroDetailsContainer}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.category}>{product.category}</p>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.amount}>
              <span className={styles.price}>${product.price}</span>
              <span className={styles.discountedPrice}>
                $
                {(
                  product.price *
                  (100 / (100 - product.discountPercentage))
                ).toFixed(2)}
              </span>
              <span className={styles.discount}>
                {product.discountPercentage}% OFF
              </span>
            </div>
            <p className={styles.meta}>Brand: {product.brand}</p>
            <p className={styles.meta}>SKU: {product.sku}</p>
            <p className={styles.meta}>
              Availability: {product.availabilityStatus}
            </p>

            {/* Rating */}
            <div className={styles.rating}>
              <span className={styles.star}>
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </span>
              <span className={styles.number}>
                ({product.rating?.toFixed(1)})
              </span>
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className={styles.images}>
          <h2 className={styles.heading}>Product Images</h2>

          <div className={styles.container}>
            {product.images?.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`product-image-${index}`}
                onClick={(e) => handleImageClick(e)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className={styles.details}>
          <div>
            <h3 className={styles.heading}>Dimensions</h3>
            <p className={styles.info}>Width: {product.dimensions?.width} cm</p>
            <p className={styles.info}>
              Height: {product.dimensions?.height} cm
            </p>
            <p className={styles.info}>Depth: {product.dimensions?.depth} cm</p>
          </div>

          <div>
            <h3 className={styles.heading}>Shipping & Warranty</h3>
            <p className={styles.info}>
              Shipping Info: {product.shippingInformation}
            </p>
            <p className={styles.info}>
              Warranty: {product.warrantyInformation}
            </p>
          </div>

          <div>
            <h3 className={styles.heading}>Return Policy</h3>
            <p className={styles.info}>Return Policy: {product.returnPolicy}</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className={styles.reviews}>
          <h2 className={styles.heading}>Customer Reviews</h2>
          <div className={styles.reviewContainer}>
            {product.reviews?.map((review, index) => (
              <div
                key={index}
                className={styles.review}
              >
                <div className={styles.rating}>
                  <span className={styles.customer}>{review.reviewerName}</span>
                  <span className={styles.stars}>
                    {"★".repeat(Math.floor(review.rating))}
                    {"☆".repeat(5 - Math.floor(review.rating))}
                  </span>
                </div>
                <p className={styles.comment}>{review.comment}</p>
                <p className={styles.date}>
                  Reviewed on: {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
