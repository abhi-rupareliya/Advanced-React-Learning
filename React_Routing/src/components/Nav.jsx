import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex text-blue-500 p-5 space-x-5 bg-gray-100">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
            <Link to="user">User</Link>
        </li>
        <li>
            <Link to="products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
