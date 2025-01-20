import React from "react";
import { Link, replace, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/", { replace: true });
  }

  function handleBack() {
    navigate(-1);
  }
  return (
    <>
      <p>About</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
        onClick={handleClick}
      >
        Go home
      </button>

      <button className="text-blue hover:underline" onClick={handleBack}>
        Go Back
      </button>
    </>
  );
}
