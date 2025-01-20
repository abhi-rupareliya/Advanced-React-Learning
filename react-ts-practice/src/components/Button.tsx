import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button(props: ButtonProps) {
  return (
    <div>
      <button id="btn1" onClick={(event) => props.handleClick(event)}>
        Click Me!
      </button>
    </div>
  );
}

export default Button;
