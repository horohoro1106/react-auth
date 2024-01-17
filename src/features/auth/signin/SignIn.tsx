import styles from "./SignIn.module.css";
import { InputField } from "../../../ui/Input/InputField";
import { handleSignIn, validationSchema } from "./helpers";
import { Button } from "../../../ui/button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function SignIn() {
  const [error, setError] = useState(""); //shows errors after submit
  const navigate = useNavigate(); //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(({ email, password }) => {
        handleSignIn(email, password, setError, navigate);
      })}
      className={styles.form}
    >
      <h2 className={styles.title}>Log In</h2>
      <InputField<SignInFormData>
        error={errors.email?.message}
        register={register}
        label="Email"
        name="email"
      />
      <InputField<SignInFormData>
        error={errors.password?.message}
        register={register}
        label="Password"
        type="password"
        name="password"
      />
      <Button>Sign In</Button>
      {error ? <span className={styles.errorMsg}>{error}</span> : null}
      <Link to="/signup" className={styles.link}>
        Create account
      </Link>
    </form>
  );
}
