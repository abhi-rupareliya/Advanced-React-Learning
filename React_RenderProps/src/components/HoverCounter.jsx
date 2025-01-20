function HoverCounter({ count, incrementCount }) {
    return (
      <div>
        <button onMouseOver={incrementCount}>Hover Me</button>
        <p>Button Hover Count: {count}</p>
      </div>
    );
  }
  
  export default HoverCounter;
  