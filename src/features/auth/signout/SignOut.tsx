import { auth } from "../../../firebase";
import { Button } from "../../../ui/button/Button";

import { signOut } from "firebase/auth";

function logOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

export function SignOut() {
  return <Button onClick={logOut}>Sign Out</Button>;
}
