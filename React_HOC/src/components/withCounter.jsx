import React, { useState } from "react";

// Higher-Order Component
export default function withCounter(WrappedComponent, incrementBy) {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + incrementBy);
    };

    return (
      // pass rest of the props by {...props}
      <WrappedComponent {...props} count={count} incrementCount={increment} />
    );
  };
}
