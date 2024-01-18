/// <reference types="vite/client" />
type Country = {
  label: string;
  value: string;
};

type SignInFormData = {
  email: string;
  password: string;
};

type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

type UserInfoData = {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  /*  location: string;
  phone: string; */
};
