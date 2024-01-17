import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import styles from "./Input.module.css";

type InputFieldProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
  type?: string;
  error: string | undefined;
};

export function InputField<T extends FieldValues>({
  label,
  register,
  error,
  name,
  type = "text",
}: InputFieldProps<T>) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        placeholder={label}
        id={name}
        className={styles.input}
      />
      {error ? <span className={styles.errorMsg}>{error}</span> : null}
    </div>
  );
}
