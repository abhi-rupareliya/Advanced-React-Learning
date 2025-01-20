import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/users/userActions";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    if (formData.name.trim() === "") errors.name = "Name is required";
    if (formData.email.trim() === "") errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Enter a valid email";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(addUser({ ...formData }));
    setFormData({ name: "", email: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-100 rounded shadow-md mb-6 max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Add User</h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter user name"
          className={`w-full px-3 py-2 border rounded focus:outline-none ${
            errors.name ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter user email"
          className={`w-full px-3 py-2 border rounded focus:outline-none ${
            errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
