import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { SignIn } from "./features/auth/signin/SignIn.tsx";
import { SignUp } from "./features/auth/signup/SignUp.tsx";
import { UserInfo } from "./features/auth/UserInfo/UserInfo.tsx";

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
        path: "/userinfo",
        element: <UserInfo />,
      },
    ],
  },
]);
