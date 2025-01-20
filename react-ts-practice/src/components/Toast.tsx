type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "bottom";

type ToastProps = {
  position: `${VerticalPosition}-${HorizontalPosition}`;
};

function Toast(props: ToastProps) {
  return <div>Toast at position {props.position}</div>;
}

export default Toast;
