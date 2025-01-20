import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers,addUser,deleteUser } from "../redux/users/userActions";

const UserList = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    const newUser = { name: "New User", email: "newuser@example.com" };
    dispatch(addUser(newUser));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-4xl">{users?.length} Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.email} className="flex justify-between items-center border-b py-2">
            {user.name} <button className="border border-blue-600 py-2 px-4  rounded hover:bg-blue-600 hover:text-white" onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
