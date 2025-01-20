import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./users/userReducer";
import { thunk } from "redux-thunk";

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
