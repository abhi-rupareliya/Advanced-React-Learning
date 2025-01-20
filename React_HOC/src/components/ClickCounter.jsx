import withCounter from "./withCounter";

function Button({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>Click Me</button>
      <p>Button Click Count: {count}</p>
    </div>
  );
}

const ClickCounter = withCounter(Button, 10);
export default ClickCounter;
