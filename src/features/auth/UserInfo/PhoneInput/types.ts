import { CountryData, CountryIso2 } from "react-international-phone";

type ParsedCountry = {
  name: CountryData[0];
  iso2: CountryData[1];
  dialCode: CountryData[2];
  format: CountryData[3];
  priority: CountryData[4];
  areaCodes: CountryData[5];
};

export type PhoneInputRefType =
  | null
  | (HTMLInputElement & {
      setCountry: (iso2: CountryIso2) => void;
      state: {
        phone: string;
        inputValue: string;
        country: ParsedCountry;
      };
    });
