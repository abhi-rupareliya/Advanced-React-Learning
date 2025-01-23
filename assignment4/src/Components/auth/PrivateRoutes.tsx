import { useSelector } from "react-redux";
import { StateType } from "../../types/storeType";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Ui/Navbar2";
function PrivateRoutes() {
  const user = useSelector((state: StateType) => state.user.user);

  return user ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/auth/login" replace={true} />
  );
}

export default PrivateRoutes;
