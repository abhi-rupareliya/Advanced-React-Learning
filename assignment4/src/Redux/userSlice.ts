import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
};

type UserState = {
  user: User | null;
  users: User[];
};

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  users: JSON.parse(localStorage.getItem("users") || "[]"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    signup: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    editProfile: (state, action) => {
      const updatedUsers = state.users.map((user) =>
        user.email === state.user?.email ? action.payload : user
      );
      state.user = action.payload;
      state.users = updatedUsers;
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    changePassword: (state, action: PayloadAction<string>) => {
      console.log("before", state.users);
      if (state.user) {
        state.user.password = action.payload;
        const updatedUsers = state.users.map((user) =>
          user.email === state.user?.email
            ? { ...user, password: action.payload }
            : user
        );
        console.log("after", updatedUsers);
        state.users = updatedUsers;
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
});

export const { login, signup, logout, changePassword, editProfile } =
  userSlice.actions;
export default userSlice.reducer;
