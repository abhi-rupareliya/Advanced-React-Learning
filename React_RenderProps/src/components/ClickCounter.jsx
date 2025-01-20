function ClickCounter({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>Click Me</button>
      <p>Button Click Count: {count}</p>
    </div>
  );
}

export default ClickCounter;
