import {
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

// export const addUser = (user) => {
//   return {
//     type: ADD_USER,
//     payload: user,
//   };
// };

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      dispatch({ type: ADD_USER, payload: data }); // Dispatch added user
    } catch (err) {
      console.error("Failed to add user:", err);
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
    } catch (err) {
      dispatch(
        fetchUsersFailure({ type: FETCH_USERS_FAILURE, payload: err.message })
      );
    }
  };
};
