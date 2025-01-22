import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/productType";
const ProductPage = () => {
  const [product, setProduct] = useState({} as Product);
  const { id } = useParams();

  const API = `https://dummyjson.com/products/${id}`;

  async function fetchProduct() {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Product Hero Section */}
      <div className="flex flex-wrap lg:flex-row items-start">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className=" w-1/2 h-1/2 rounded-lg shadow-md"
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-semibold text-gray-900">
            {product.title}
          </h1>
          <p className="mt-2 text-gray-600">{product.category}</p>
          <p className="mt-4 text-lg">{product.description}</p>
          <div className="mt-6">
            <span className="text-xl font-semibold text-green-600">
              ${product.price}
            </span>
            <span className="ml-4 text-sm line-through text-gray-500">
              $
              {(
                product.price *
                (100 / (100 - product.discountPercentage))
              ).toFixed(2)}
            </span>
            <span className="ml-2 text-sm text-red-500">
              {product.discountPercentage}% OFF
            </span>
          </div>
          <p className="mt-4 text-gray-600">Brand: {product.brand}</p>
          <p className="mt-2 text-gray-600">SKU: {product.sku}</p>
          <p className="mt-2 text-gray-600">
            Availability: {product.availabilityStatus}
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center">
            <span className="text-yellow-400">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="ml-2 text-gray-500">
              ({product.rating?.toFixed(1)})
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">
              Add to Cart
            </button>
            <button className="border py-2 px-4 rounded-md text-blue-500 hover:bg-gray-100">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900">Product Images</h2>

        <div className="flex flex-wrap mt-4 w-fit mx-auto gap-20">
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`product-image-${index}`}
              className="w-64 h-64 object-cover rounded-lg shadow-sm mx-auto"
            />
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Dimensions</h3>
          <p className="mt-2 text-gray-600">
            Width: {product.dimensions?.width} cm
          </p>
          <p className="mt-1 text-gray-600">
            Height: {product.dimensions?.height} cm
          </p>
          <p className="mt-1 text-gray-600">
            Depth: {product.dimensions?.depth} cm
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Shipping & Warranty
          </h3>
          <p className="mt-2 text-gray-600">
            Shipping Info: {product.shippingInformation}
          </p>
          <p className="mt-1 text-gray-600">
            Warranty: {product.warrantyInformation}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">Return Policy</h3>
          <p className="mt-2 text-gray-600">
            Return Policy: {product.returnPolicy}
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          Customer Reviews
        </h2>
        <div className="mt-4 space-y-6">
          {product.reviews?.map((review, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{review.reviewerName}</span>
                <span className="text-yellow-400">
                  {"★".repeat(Math.floor(review.rating))}
                  {"☆".repeat(5 - Math.floor(review.rating))}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
              <p className="mt-2 text-sm text-gray-500">
                Reviewed on: {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
