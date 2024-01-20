import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import * as yup from "yup";

const regx = {
  password: {
    digit: /[0-9]/,
    minLowercase: /[a-z]/,
    minUppercase: /[A-Z]/,
    minSymbol: /[^\w]/,
  },
};

const email = yup
  .string()
  .email("Email should be in format example@mail.com")
  .required("You have to enter email");

const password = yup
  .string()
  .min(8, "Password must be atleast 8 characters long")
  .matches(regx.password.digit, "Your password must contain at least 1 digit")
  .matches(
    regx.password.minLowercase,
    "Your password must contain at least 1 lowercase letter"
  )
  .matches(
    regx.password.minUppercase,
    "Your password must contain at least 1 digit"
  )
  .matches(
    regx.password.minSymbol,
    "Your password must contain at least 1 symbol"
  )
  .required("Enter password");

const confirmPassword = yup
  .string()
  .oneOf([yup.ref("password")], "Passwords does not match")
  .required("Confirm password");

export const validationSchema = yup
  .object({
    email,
    password,
    confirmPassword,
  })
  .required();

export async function handleSignUp(
  email: string,
  password: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
) {
  setError("");
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Signed up
      navigate("/user-info");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/invalid-credential") {
        setError("Incorrect email or password");
        return errorMessage;
      } else {
        setError(errorMessage);
        return errorMessage;
      }
    });
}
