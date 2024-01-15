import { ErrorMessage, Field } from "formik";
import styles from "./Input.module.css";

type InputProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

export function Input({ id, label, name, placeholder, type }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <Field
        type={type}
        className={styles.input}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      <ErrorMessage name={name}>
        {(error) => <span className={styles.errorMsg}>{error}</span>}
      </ErrorMessage>
    </div>
  );
}
