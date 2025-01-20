import withCounter from "./withCounter";

// Hoverable Header Component
function HoverableHeader({ name, count, incrementCount }) {
  return (
    <div>
      <p>name: {name}</p>
      <h2 onMouseOver={incrementCount}>Hover over me</h2>
      <p>Hover Count: {count}</p>
      <br/>
      <br/>
    </div>
  );
}

const HoverCounter = withCounter(HoverableHeader, 3); // Increments by 3

export default HoverCounter;
