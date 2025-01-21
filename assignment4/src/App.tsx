import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import EditProfile from "./Components/EditProfile";
import ChangePassword from "./Components/ChangePassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
