import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout());
    navigate('/',{replace : true})
  };

  return (
    <nav className="bg-slate-50 p-4 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className=" text-2xl font-bold">Products</div>

        <div className={` space-x-6 items-center flex`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/edit-profile"}>Profile</Link>
          <Link to={"/change-password"}>change password</Link>
          <p onClick={handleLogout}>Log Out</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
