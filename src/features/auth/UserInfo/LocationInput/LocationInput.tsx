import { PlaceKit } from "@placekit/autocomplete-react";
import "@placekit/autocomplete-js/dist/placekit-autocomplete.css";
import type { PKResult } from "@placekit/client-js";
import styles from "../../../../ui/Input/Input.module.css";
import { ErrorMessage } from "formik";
import { useCallback } from "react";

type LocationInputProps = {
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void;
};

//The <input> is an uncontrolled component and should be treated as such.
// Making it controlled may cause typing glitches
// because React state in controlled components can conflict
//with Autocomplete JS internal state management.
export const LocationInput = ({ setFieldValue }: LocationInputProps) => {
  //handlers wrapped in useCallback because of Autocomplete specific
  const handlePick = useCallback(
    (value: string, item: PKResult) => {
      setFieldValue("location", `${item.city}, ${value}`);
    },
    [setFieldValue]
  );
  const handleChange = useCallback(
    (query: string) => {
      setFieldValue("location", query);
    },
    [setFieldValue]
  );
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="location">
        Address (start typing and pick one from suggestions)
      </label>
      <PlaceKit
        name="location"
        apiKey="pk_c8LQmqz17ObOc39sWMvcwA320s54vqlfkY841NsiDC4="
        id="location"
        onResults={handleChange}
        placeholder="Enter address"
        onPick={handlePick}
      />
      <ErrorMessage name="location">
        {(error) => <span className={styles.errorMsg}>{error}</span>}
      </ErrorMessage>
    </div>
  );
};
