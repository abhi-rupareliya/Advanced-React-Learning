import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard";
import { Product } from "../types/productType";



const Products = () => {
  const [params, setParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const limit = 8;

  const skip = parseInt(params.get("skip") || "0");

  const API = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;

  const fetchProducts = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setProducts(data.products);
      setTotalProducts(data.total);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setParams({ skip: (selected * limit).toString(), limit: limit.toString() });
  };

  return (
    <div className="max-w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-fit gap-6 p-6 mx-auto border rounded mt-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(totalProducts / limit)}
          forcePage={Math.ceil(skip / limit)}
          previousLabel="previous"
          containerClassName="flex items-center space-x-2"
          pageClassName="px-4 py-2 border rounded-md text-gray-700 hover:bg-blue-100"
          activeClassName="bg-blue-500 text-white"
          previousClassName="px-4 py-2 border rounded-md text-gray-700 hover:bg-blue-100"
          nextClassName="px-4 py-2 border rounded-md text-gray-700 hover:bg-blue-100"
          disabledClassName="text-gray-400 cursor-not-allowed"
          breakClassName="px-4 py-2 text-gray-700"
        />
      </div>
    </div>
  );
};

export default Products;
