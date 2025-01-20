import Button from "./components/Button";
import Child from "./components/Child";
import Counter from "./components/Counter";
import CustomButton from "./components/CustomButton";
import Greet from "./components/Greet";
import Loggedin from "./components/Loggedin";
import Parent from "./components/Parent";
import RandomNumber from "./components/RandomNumber";
import Toast from "./components/Toast";
import Wrapper from "./Context/Wrapper";

function App() {
  const users = [
    { fname: "Abhi", lname: "Patel" },
    { fname: "Kevin", lname: "Patel" },
  ];
  return (
    <>
      <Greet name="Abhi" messagesCount={10} users={users} status="online" />
      <Parent>
        <Child />
      </Parent>

      <Button
        handleClick={(e) => console.log("button clicked", e.currentTarget)}
      />

      <Loggedin />
      <Counter />
      <Wrapper />

      <RandomNumber value={5} isPositive />
      {/* <RandomNumber value={-5} isNegative isPositive/> error  */}

      <Toast position="top-center" />
      <CustomButton varient="primary" onClick={() => alert("Clicked")}>
        Click This Button
      </CustomButton>
    </>
  );
}

export default App;
