import { useMemo } from "react";
import Select from "react-select/async";
import countryList from "react-select-country-list";
import styles from "../../../../ui/Input/Input.module.css";
import { UseControllerProps, useController } from "react-hook-form";

export const CountrySelect = ({
  control,
  name,
}: UseControllerProps<UserInfoData>) => {
  const options: Country[] = useMemo(() => countryList().getData(), []);
  const { field } = useController({ control, name });
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>Select your country</label>
      <Select
        {...field}
        className={styles.select}
        cacheOptions
        defaultOptions
        loadOptions={(_inputValue, callback) => {
          callback(options);
        }}
        onChange={(selectedOption) => {
          selectedOption && field.onChange(selectedOption.value);
        }}
        value={options.find((option) => option.value === field.value)}
        placeholder="Select your country"
      />
    </div>
  );
};
