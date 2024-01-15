import { UseControllerProps, useController } from "react-hook-form";
import styles from "./Input.module.css";

type InputFieldProps = UseControllerProps<FormDatas> & {
  label: string;
  name: string;
  type?: string;
};

export const InputField = (props: InputFieldProps) => {
  const { label, name, control } = props;
  const { field, fieldState } = useController({ control, name });

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={field.name} className={styles.label}>
        {label}
      </label>
      <input
        {...field}
        type={props?.type ? props.type : "text"}
        placeholder={props.name}
        id={field.name}
        className={styles.input}
      />
      {fieldState.error?.message ? (
        <span className={styles.errorMsg}>{fieldState.error?.message}</span>
      ) : null}
    </div>
  );
};
