import styles from "./Header.module.css";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { SignOut } from "../../features/auth/signout/SignOut";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
export function Header() {
  const [email, setEmail] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      setEmail(user.email === null ? "" : user.email);
    } else {
      setEmail("");
    }
  });
  return (
    <header className={styles.header}>
      <h1>React Auth 🐺</h1>
      <div className={styles.userContainer}>
        {email ? (
          <>
            <span className={styles.userInfo}>{email}</span>
            <SignOut />
          </>
        ) : (
          <>
            <Button>
              <Link className={styles.userInfo} to="/signin">
                Sign In
              </Link>
            </Button>
            <Button>
              <Link className={styles.userInfo} to="/signup">
                Sign Up
              </Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
