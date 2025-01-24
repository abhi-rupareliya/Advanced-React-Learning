import { ErrorMessage, Field } from "formik";
import styles from "./ui.module.scss";
type InputProps = {
  name: string;
  id: string;
  lable: string;
  type: string;
};

export function Input(props: InputProps) {
  return (
    <div className={styles.input_wrapper}>
      <label htmlFor={props.name} className={styles.input_lable}>
        Enter {props.lable}
      </label>
      <Field
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.lable}
        className={styles.input}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className={styles.input_error}
      />
    </div>
  );
}
