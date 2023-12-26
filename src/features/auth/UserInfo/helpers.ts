import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  birthDate: "",
  country: "",
  location: "",
};

export const schema = Yup.object({});

export async function handleSubmit(values: typeof initialValues) {
  console.log(values);
}
