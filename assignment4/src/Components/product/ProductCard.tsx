import { IoStar } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { TbRosetteDiscount } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Product } from "../../types/productType";

type PropType = {
  product: Partial<Product>;
};

function ProductCard(props: PropType) {
  const product = props.product;
  return (
    <div
      key={product.id}
      className="flex flex-col justify-between bg-white p-4 rounded-lg border shadow-sm max-w-full min-h-fit sm:w-72 md:w-64 lg:w-60 mx-auto"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className=" object-cover rounded-md mt-4 mx-auto"
      />

      <p className="py-1 px-2 mt-2 bg-gray-100 w-fit text-xs rounded-xl hover:cursor-pointer">
        {product.category}
      </p>
      <h3 className="text-md ml-1 mt-1 font-semibold hover:cursor-pointer">
        {product.title}
      </h3>
      <p className="ml-1 mt-2 text-sm font-extralight hover:cursor-pointer">
        {product.brand}
      </p>
      <p className="ml-1 mt-1 text-yellow-500 flex space-x-1 items-center hover:cursor-pointer text-xl">
        <IoStar /> <span className="text-sm text-black">{product.rating}</span>
      </p>
      <p className="ml-1 mt-1 text-green-500 flex space-x-1 items-center hover:cursor-pointer text-xl">
        <IoMdPricetags />{" "}
        <span className="text-sm text-black">{product.price}</span>
      </p>
      <p className="ml-1 mt-1 text-green-500 flex space-x-1 items-center hover:cursor-pointer text-xl">
        <TbRosetteDiscount />{" "}
        <span className="text-sm text-black">
          {product.discountPercentage} %
        </span>
      </p>
      <Link className="ml-2 mt-1 text-blue-500" to={`/product/${product.id}`}>
        view more...
      </Link>
    </div>
  );
}

export default ProductCard;
