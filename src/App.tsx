import { Outlet } from "react-router-dom";
import { Header } from "./ui/header/Header";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
