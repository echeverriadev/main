import { ActiveLink } from "./ActiveLink";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      <ActiveLink href="/harry-potter" label="Harry Potter" />
      <ActiveLink href="/rick-and-morty" label="Rick y Morty" />
    </nav>
  )
}
