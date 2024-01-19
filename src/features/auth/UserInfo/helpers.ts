import * as Yup from "yup";
import { db, auth } from "../../../firebase";
import { doc, setDoc, FirestoreError } from "firebase/firestore";

export const initialValues = {
  firstName: "",
  lastName: "",
  birthDate: "",
  country: "",
  //location: "",
  phone: "",
};

export async function getDefaultValues() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    initialValues.country = data.country || "";
  } catch (error) {
    console.error("Error getting user country:", error);
  }
  return initialValues;
}
getDefaultValues();

const regx = {
  phone:
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
};

const firstName = Yup.string().required("First name is required");
const lastName = Yup.string().required("Last name is required");
const birthDate = Yup.string().required("Birth date is required");
const country = Yup.string().required("Country is required");
//const location = Yup.string().required("Location is required");
const phone = Yup.string()
  .matches(regx.phone, "Enter valid number")
  .required("Phone is required");

export const validationSchema = Yup.object({
  firstName,
  lastName,
  birthDate,
  country,
  // location,
  phone,
});
export async function handleUserInfo(
  values: typeof initialValues,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  setError("");
  const userEmail = auth.currentUser?.email;
  if (!userEmail) {
    setError("User is not logged in");
    return "User is not logged in";
  }
  try {
    const userData = {
      userEmail,
      ...values,
    };
    const userRef = await doc(db, "users", userEmail);
    await setDoc(userRef, userData);
    console.log(
      `user ${userEmail} created with this data: ${JSON.stringify(userData)}`
    );
  } catch (error: unknown) {
    if (error instanceof FirestoreError) {
      console.error("Firebase Error in handleSubmit:", error);
      const errorMessage = error.message;
      setError(errorMessage);
      return errorMessage;
    }

    console.error("Unknown Error in handleSubmit:", error);
    setError("An unknown error occurred");
    return "An unknown error occurred";
  }
}
