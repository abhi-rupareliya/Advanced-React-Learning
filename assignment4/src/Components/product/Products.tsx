import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard";
import { Product } from "../../types/productType";
import Loading from "../Ui/Loading";
import styles from "./product.module.scss";

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

  if (!products.length) return <Loading />;

  return (
    <div className={styles.products}>
      <div className={styles.cardContainer}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(totalProducts / limit)}
          forcePage={Math.ceil(skip / limit)}
          previousLabel="previous"
          containerClassName={styles.container}
          pageClassName={styles.page}
          activeClassName={styles.page_active}
          previousClassName={styles.prev}
          nextClassName={styles.next}
          disabledClassName={styles.disabled}
          breakClassName={styles.break}
        />
      </div>
    </div>
  );
};

export default Products;
