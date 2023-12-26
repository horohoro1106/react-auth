import { Form, Formik } from "formik";
import styles from "./SignIn.module.css";
import { Input } from "../../../ui/Input/Input";
import { initialValues, handleSubmit } from "./helpers";
import { Button } from "../../../ui/button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const SignIn = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) =>
        handleSubmit(values.email, values.password, setError, navigate)
      }
    >
      <Form className={styles.form}>
        <h2 className={styles.title}>Log In</h2>
        <Input
          label="Your email"
          name="email"
          id="email"
          placeholder="Your email"
        />
        <Input
          label="Your password"
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />
        <Button>Sign In</Button>
        {error ? <span className={styles.errorMsg}>{error}</span> : null}
        <Link to="/signup" className={styles.link}>
          Create account
        </Link>
      </Form>
    </Formik>
  );
};
