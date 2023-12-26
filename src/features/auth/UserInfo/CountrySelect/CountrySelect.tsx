import { useMemo, useEffect /* , useState */ } from "react";
import Select from "react-select/async";
import countryList from "react-select-country-list";
import styles from "../../../../ui/Input/Input.module.css";
// TODO: delete comments
type CountrySelectProps = {
  label: string;
  name: string;
  placeholder: string;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void;
  value: string;
};

export const CountrySelect = ({
  label,
  name,
  placeholder,
  setFieldValue,
  value,
}: CountrySelectProps) => {
  const options: Country[] = useMemo(() => countryList().getData(), []);
  /*  const [userCountry, setUserCountry] = useState<string | null>(null); */

  useEffect(() => {
    const getUserCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json(); /* 
        setUserCountry(data.country || null); */
        setFieldValue(name, data.country || "");
      } catch (error) {
        console.error("Error getting user country:", error);
        /* setUserCountry(null); */
      }
    };

    // Get user's country on initial render
    getUserCountry();
  }, [name, setFieldValue]);

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <Select
        className={styles.input}
        cacheOptions
        defaultOptions
        loadOptions={(_inputValue, callback) => {
          callback(options);
        }}
        onChange={(selectedOption) =>
          selectedOption && setFieldValue(name, selectedOption.value)
        }
        value={
          options.find((option) => option.value === value)
          /* value  || userCountry */
          /*  ? options.find(
            (option) => option.value === value /* || userCountry */
          //  )
          /* : "" */
        }
        placeholder={placeholder}
      />
    </div>
  );
};
