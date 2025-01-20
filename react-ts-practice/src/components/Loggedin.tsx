import { useState } from "react";

type User = {
  name: string;
  age: number;
};
function Loggedin() {
  // state infers the type of isLoggedIn to be a boolean
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState<User | null>(null);

  // type assertion
  //   const [user, setUser] = useState<User>({} as User);

  const handleLogin = () => {
    setUser({
      name: "Abhi",
      age: 21,
    });
  };

  const handleLogout = () => {
    // setUser({} as User);
    setUser(null);
  };

  return (
    <div>
      <h1>
        {user?.name} - {user?.age}
      </h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Loggedin;
