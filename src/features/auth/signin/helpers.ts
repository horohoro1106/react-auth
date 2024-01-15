import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { NavigateFunction } from "react-router-dom";

export async function handleSignIn(
  email: string,
  password: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
) {
  setError("");
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      navigate("/");
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
