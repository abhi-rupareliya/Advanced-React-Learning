import { useSelector } from "react-redux";
import { StateType } from "../types/storeType";

function Home() {
  const user = useSelector((state: StateType) => state.user.user);
  return (
    <div>
      Welcome {user.firstName} {user.lastName}
    </div>
  );
}

export default Home;
