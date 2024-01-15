/// <reference types="vite/client" />
type Country = {
  label: string;
  value: string;
};

type SignInFormData = {
  Email: string;
  Password: string;
};

type SignUpFormData = { Email: string; Password: string };

type FormDatas = SignInFormData | SignUpFormData;
