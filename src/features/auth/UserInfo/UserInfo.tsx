import { Form, Formik } from "formik";
import styles from "../signin/SignIn.module.css";
import { Input } from "../../../ui/Input/Input";
import { initialValues, schema } from "./helpers";
import { Button } from "../../../ui/button/Button";
import { useState, useEffect } from "react";
import { CountrySelect } from "./CountrySelect/CountrySelect";
import { LocationInput } from "./LocationInput/LocationInput";

//имя, фамилия, год рождения, место проживания страна улица  номер телефона

export const UserInfo = () => {
  const [error, setError] = useState<string>("");
  useEffect(function () {}, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      {({ setFieldValue, values }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Complete registration</h2>
          <Input
            label="Your first name"
            name="firstName"
            id="firstName"
            placeholder="Your first name"
          />
          <Input
            label="Your last name"
            name="lastName"
            id="lastName"
            placeholder="Your last name"
          />
          <Input
            label="Your birth Date"
            type="date"
            name="birthDate"
            id="birthDate"
            placeholder="Enter date"
          />
          {/* <CountrySelect
            label="Select your country"
            name="country"
            placeholder="Select your country"
            setFieldValue={setFieldValue}
            value={values.country}
          /> */}

          <LocationInput setFieldValue={setFieldValue} />
          <Button>Sign Up</Button>
          {error ? <span className={styles.errorMsg}>{error}</span> : null}
        </Form>
      )}
    </Formik>
  );
};
