"use client";

import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();
  const search = searchParams.get('name')
  const price = searchParams.get('price')
  return (
    <>
    <p>
      Params:{JSON.stringify({search,price})}
    </p>

      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
}
