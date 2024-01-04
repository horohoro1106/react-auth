import { PlaceKit } from "@placekit/autocomplete-react";
import "@placekit/autocomplete-js/dist/placekit-autocomplete.css";

type LocationInputProps = {
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void;
};

export const LocationInput = ({ setFieldValue }: LocationInputProps) => {
  return (
    <PlaceKit
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setFieldValue("location", e.target.value)
      }
      placeholder="Enter address"
      apiKey="pk_c8LQmqz17ObOc39sWMvcwA320s54vqlfkY841NsiDC4="
      onPick={(location, item) =>
        setFieldValue("location", `${item.city}, ${location}`)
      }
    />
  );
};
