import { PhoneInput as UsersPhone } from "react-international-phone";
import "react-international-phone/style.css";
import styles from "../../../../ui/Input/Input.module.css";
import { Control, UseFormGetValues, useController } from "react-hook-form";
import { useEffect, useRef } from "react";
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
  //getting users country and setting country phone code
  const country = getValues("country");
  const ref = useRef<PhoneInputRefType>(null);
  useEffect(
    function () {
      if (country) ref.current?.setCountry(country?.toLowerCase());
    },
    [country, getValues]
  );

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
          field.onChange(phone);
          console.log(`phone changed ${phone}`);
        }}
      />
      {error?.message ? (
        <span className={styles.errorMsg}>{error.message}</span>
      ) : null}
    </div>
  );
}
