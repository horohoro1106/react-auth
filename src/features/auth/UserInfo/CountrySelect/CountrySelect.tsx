import { useMemo, useEffect } from "react";
import Select from "react-select/async";
import countryList from "react-select-country-list";
import styles from "../../../../ui/Input/Input.module.css";

type CountrySelectProps = {
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void;
  value: string;
};

export const CountrySelect = ({ setFieldValue, value }: CountrySelectProps) => {
  const options: Country[] = useMemo(() => countryList().getData(), []);

  useEffect(() => {
    const getUserCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setFieldValue("country", data.country || "");
      } catch (error) {
        console.error("Error getting user country:", error);
      }
    };

    // Get user's country on initial render
    getUserCountry();
  }, [setFieldValue]);

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>Select your country</label>
      <Select
        className={styles.select}
        cacheOptions
        defaultOptions
        loadOptions={(_inputValue, callback) => {
          callback(options);
        }}
        onChange={(selectedOption) =>
          selectedOption && setFieldValue("country", selectedOption.value)
        }
        value={options.find((option) => option.value === value)}
        placeholder="Select your country"
      />
    </div>
  );
};
