import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/userSlice";
import styles from "./ui.module.scss";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_title}>Products</div>

        <div className={styles.navbar_links}>
          <Link to={"/"} className={styles.links} replace={true}>
            Home
          </Link>
          <Link to={"/products"} className={styles.navbar_links} replace={true}>
            Products
          </Link>
          <Link
            to={"/edit-profile"}
            className={styles.navbar_links}
            replace={true}
          >
            Profile
          </Link>
          <Link
            to={"/change-password"}
            className={styles.navbar_links}
            replace={true}
          >
            change password
          </Link>
          <p onClick={handleLogout} className={styles.navbar_logout}>
            Log Out
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
