import { UserContext } from "./UserContext";
import { useContext } from "react";

function User() {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext?.setUser({ name: "Abhi", email: "abhi@email.com" });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <h1>
        {userContext.user?.name} - {userContext.user?.email}
      </h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default User;
