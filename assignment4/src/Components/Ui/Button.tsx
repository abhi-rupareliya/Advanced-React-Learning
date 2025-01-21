type ButtonProps = {
  type?: "submit" | "button";
  text: string;
  width: "full" | "fit-content";
  onClick?: () => void;
};

export function Button({ type = "button", text, width, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-${
        width === "full" ? "full" : "fit"
      } bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {text}
    </button>
  );
}
