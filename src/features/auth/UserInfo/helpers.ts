import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  birthDate: "",
  country: "ua",
  location: "",
  phone: "",
};

const regx = {
  phone:
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
};

const firstName = Yup.string().required("First name is required");
const lastName = Yup.string().required("Last name is required");
const birthDate = Yup.string().required("Birth date is required");
const country = Yup.string().required("Country is required");
const location = Yup.string().required("Location is required");
const phone = Yup.string()
  .matches(regx.phone, "Enter valid number")
  .required("Phone is required");

export const schema = Yup.object({
  firstName,
  lastName,
  birthDate,
  country,
  location,
  phone,
});

export async function handleSubmit(values: typeof initialValues) {
  console.log(values);
}
