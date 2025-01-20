import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  function handleClick() {
    setSearchParams({page : 50})
  }

  return (
    <>
      <div>Products</div>
      <div>page {page}</div>
      <button className="" onClick={handleClick}>goto 50</button>
    </>
  );
}
