import { Form, Formik } from "formik";
import styles from "../signin/SignIn.module.css";
import { Input } from "../../../ui/Input/Input";
import { handleSubmit, initialValues, schema } from "./helpers";
import { Button } from "../../../ui/button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const SignUp = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) =>
        handleSubmit(values.email, values.password, setError, navigate)
      }
    >
      <Form className={styles.form}>
        <h2 className={styles.title}>Create account</h2>
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
        <Input
          label="Confirm password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
        />
        <Button>Sign Up</Button>
        {error ? <span className={styles.errorMsg}>{error}</span> : null}
        <Link to="/" className={styles.link}>
          Sign In
        </Link>
      </Form>
    </Formik>
  );
};
