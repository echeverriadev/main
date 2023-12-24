import { ActiveLink } from "./ActiveLink";
import styles from "../styles/Navbar.module.css";

interface Props {
  buttons: {label: string, click: () => void}[]
}

export const Navbar = ({buttons}: Props) => {
  return (
    <nav className={styles["navbar-container"]}>
      {
        buttons.map((button, index) => (
          <ActiveLink key={index} label={button.label} click={button.click}/>
        ))
      }
    </nav>
  )
}
