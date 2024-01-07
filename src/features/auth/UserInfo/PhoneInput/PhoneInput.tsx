import { PhoneInput as UsersPhone } from "react-international-phone";
import "react-international-phone/style.css";
import styles from "../../../../ui/Input/Input.module.css";
import { ErrorMessage, Field, FieldProps } from "formik";

export function PhoneInput() {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="phone">
        Your phone number
      </label>
      <Field name="phone">
        {({ field, form }: FieldProps<string>) => (
          <>
            <UsersPhone
              {...field}
              inputProps={{
                id: "phone",
                name: "phone",
                className: styles.input,
              }}
              defaultCountry={form.values.country}
              value={field.value}
              onChange={(phone) => {
                form.handleChange("phone")(phone);
              }}
            />
            <ErrorMessage name="phone">
              {(error) => <span className={styles.errorMsg}>{error}</span>}
            </ErrorMessage>
          </>
        )}
      </Field>
    </div>
  );
}
