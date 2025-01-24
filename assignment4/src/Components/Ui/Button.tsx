type ButtonProps = {
  type?: "submit" | "button";
  text: string;
  width: "full" | "fit-content";
  onClick?: () => void;
};

import styles from "./ui.module.scss";

export function Button({ type = "button", text, width, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={width === "full" ? styles.btn_full : styles.btn_fit}
    >
      {text}
    </button>
  );
}
