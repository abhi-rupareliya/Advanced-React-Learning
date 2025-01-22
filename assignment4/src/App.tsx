import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import EditProfile from "./Components/EditProfile";
import ChangePassword from "./Components/ChangePassword";
import Navbar from "./Components/Navbar2";
import Products from "./Components/Products";
import Product from "./Components/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="/" element={<Login />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
