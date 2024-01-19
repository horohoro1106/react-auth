import { PhoneInput as UsersPhone } from "react-international-phone";
import "react-international-phone/style.css";
import styles from "../../../../ui/Input/Input.module.css";
import { Control, UseFormGetValues, useController } from "react-hook-form";
import { useRef } from "react";
import { PhoneInputRefType } from "./types";

type PhoneInputProps = {
  control: Control<UserInfoData>;
  name: keyof UserInfoData;
  getValues: UseFormGetValues<UserInfoData>;
};

export function PhoneInput({ control, name, getValues }: PhoneInputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });
  const ref = useRef<PhoneInputRefType>(null);
  ref.current?.setCountry(getValues("country").toLowerCase());

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="phone">
        Your phone number
      </label>

      <UsersPhone
        {...field}
        ref={ref}
        inputProps={{
          id: "phone",
          name: "phone",
          className: styles.input,
        }}
        onChange={(phone) => {
          console.log(`phone changed ${phone}`);
        }}
      />
      {error?.message ? (
        <span className={styles.errorMsg}>{error.message}</span>
      ) : null}
    </div>
  );
}
