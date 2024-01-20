import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "../signin/SignIn.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleSignUp, validationSchema } from "./helpers";
import { InputField } from "../../../ui/Input/InputField";
import { Button } from "../../../ui/button/Button";

export function SignUp() {
  const [error, setError] = useState(""); //shows errors after submit
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(({ email, password }) =>
        handleSignUp(email, password, setError, navigate)
      )}
      className={styles.form}
    >
      <h2 className={styles.title}>Log In</h2>
      <InputField<SignUpFormData>
        register={register}
        label="Email"
        name="email"
        error={errors.email?.message}
      />
      <InputField<SignUpFormData>
        register={register}
        label="Password"
        type="password"
        name="password"
        error={errors.password?.message}
      />
      <InputField<SignUpFormData>
        register={register}
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        error={errors.confirmPassword?.message}
      />
      <Button>Sign In</Button>
      {error ? <span className={styles.errorMsg}>{error}</span> : null}
      <Link to="/signup" className={styles.link}>
        Create account
      </Link>
    </form>
  );
}
