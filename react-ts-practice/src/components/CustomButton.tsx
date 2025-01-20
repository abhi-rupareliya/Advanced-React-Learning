// wrapping HTML button element in a custom component

type CustomButtonProps = {
  varient: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

function CustomButton({ varient, children, ...rest }: CustomButtonProps) {
  return (
    <button {...rest} className={`btn-${varient}`}>
      {children}
    </button>
  );
}

export default CustomButton;
