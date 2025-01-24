import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./Components/auth/EditProfile";
import ChangePassword from "./Components/auth/ChangePassword";
import Products from "./Components/product/Products";
import Product from "./Components/product/ProductDetails";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/SignUp";
import PrivateRoutes from "./Components/auth/PrivateRoutes";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
