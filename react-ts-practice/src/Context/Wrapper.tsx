import User from "./User";
import { UserContextProvider } from "./UserContext";

function Wrapper() {
  return (
    <div>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default Wrapper;
