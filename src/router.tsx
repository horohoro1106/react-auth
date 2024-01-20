import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { SignIn } from "./features/auth/signin/SignIn.tsx";
import { SignUp } from "./features/auth/signup/SignUp.tsx";
import { UserInfo } from "./features/auth/UserInfo/UserInfo.tsx";
import { SignUpComplete } from "./ui/signupComplete/SignUpComplete.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/user-info",
        element: <UserInfo />,
      },
      {
        path: "/signup-complete",
        element: <SignUpComplete />,
      },
    ],
  },
]);
