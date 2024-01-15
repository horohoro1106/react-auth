import styles from "./SignIn.module.css";
import { InputField } from "../../../ui/Input/InputField";
import { handleSignIn } from "./helpers";
import { Button } from "../../../ui/button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    Email: yup.string().email().required(),
    Password: yup.string().required(),
  })
  .required();

export function SignIn() {
  const [error, setError] = useState(""); //shows errors after submit
  const navigate = useNavigate(); //
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(({ Email, Password }) => {
        handleSignIn(Email, Password, setError, navigate);
      })}
      className={styles.form}
    >
      <h2 className={styles.title}>Log In</h2>
      <InputField control={control} label="Email" name="Email" />
      <InputField
        control={control}
        label="Password"
        type="password"
        name="Password"
      />
      <Button>Sign In</Button>
      {error ? <span className={styles.errorMsg}>{error}</span> : null}
      <Link to="/signup" className={styles.link}>
        Create account
      </Link>
    </form>
  );
}
