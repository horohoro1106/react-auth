import { PlaceKit } from "@placekit/autocomplete-react";
import "@placekit/autocomplete-js/dist/placekit-autocomplete.css";
import type { PKResult } from "@placekit/client-js";
import styles from "../../../../ui/Input/Input.module.css";
import { useCallback } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

type LocationInputProps = {
  register: UseFormRegister<UserInfoData>;
  setValue: UseFormSetValue<UserInfoData>;
  error: string | undefined;
};

export const LocationInput = ({
  register,
  setValue,
  error,
}: LocationInputProps) => {
  //handlers wrapped in useCallback because of Autocomplete specific
  const handlePick = useCallback(
    (value: string, item: PKResult) => {
      setValue("location", `${item.city}, ${value}`);
    },
    [setValue]
  );

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="location">
        Address (start typing and pick one from suggestions)
      </label>
      <PlaceKit
        {...register("location")}
        name="location"
        apiKey="pk_c8LQmqz17ObOc39sWMvcwA320s54vqlfkY841NsiDC4="
        id="location"
        placeholder="Enter address"
        onPick={handlePick}
      />
      {error ? <span className={styles.errorMsg}>{error}</span> : null}
    </div>
  );
};
