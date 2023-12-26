import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const regx = {
  email: /^\S+@\S+\.\S+$/,
  password: {
    digit: /[0-9]/,
    minLowercase: /[a-z]/,
    minUppercase: /[A-Z]/,
    minSymbol: /[^\w]/,
  },
};

export const email = Yup.string()
  .matches(regx.email, "Email should be in format example@mail.com")
  .required("Enter email");

export const password = Yup.string()
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

const confirmPassword = Yup.string()
  .required("Confirm password")
  .oneOf([Yup.ref("password")], "Passwords does not match");

export const schema = Yup.object().shape({
  email,
  password,
  confirmPassword,
});

export async function handleSubmit(
  email: string,
  password: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
) {
  setError("");
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Signed up
      navigate("/userinfo");
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
