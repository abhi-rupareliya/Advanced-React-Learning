import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const uid = e.target.id.value;

    navigate(`profile/${uid}`)
  }
  return (
    <div>
      <p>User</p>
      <form onSubmit={handleSubmit}>
        <input name="id" className="border" type="number"></input>
        <button type="submit">View Profile</button>
      </form>
      <Outlet />
    </div>
  );
}
