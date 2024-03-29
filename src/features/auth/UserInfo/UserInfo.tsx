import styles from "../signin/SignIn.module.css";
import { getDefaultValues, validationSchema, handleUserInfo } from "./helpers";
import { Button } from "../../../ui/button/Button";
import { useState } from "react";
import { CountrySelect } from "./CountrySelect/CountrySelect";
import { LocationInput } from "./LocationInput/LocationInput";
import { PhoneInput } from "./PhoneInput/PhoneInput";
import { InputField } from "../../../ui/Input/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const UserInfo = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<UserInfoData>({
    resolver: yupResolver(validationSchema),
    defaultValues: async () => getDefaultValues(),
  });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) =>
        handleUserInfo(data, setError, navigate)
      )}
    >
      <h2 className={styles.title}>Complete registration</h2>
      <InputField<UserInfoData>
        register={register}
        label="Your first name"
        name="firstName"
        error={errors.firstName?.message}
      />
      <InputField<UserInfoData>
        register={register}
        label="Your last name"
        name="lastName"
        error={errors.lastName?.message}
      />
      <InputField<UserInfoData>
        register={register}
        label="Your birth Date"
        type="date"
        name="birthDate"
        error={errors.birthDate?.message}
      />
      <CountrySelect control={control} name="country" />
      <LocationInput
        register={register}
        setValue={setValue}
        error={errors.location?.message}
      />
      <PhoneInput getValues={getValues} control={control} name="phone" />
      <Button>Sign Up</Button>
      {error ? <span className={styles.errorMsg}>{error}</span> : null}
    </form>
  );
};
