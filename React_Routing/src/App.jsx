import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import NoPage from "./components/NoPage";
import User from "./components/User";
import Profile from "./components/Profile";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User/>}>
          <Route index element={<Profile/>}/>
          <Route path="profile/:id" element={<Profile/>}></Route>
        </Route>
        <Route path="products" element={<Products/>}/> 
        <Route path="*" element={<NoPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
