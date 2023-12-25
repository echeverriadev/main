import { ActiveLink } from "./ActiveLink";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

export const Navbar = () => {
  const {locale, asPath, push} = useRouter();

  const handleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    push(asPath, asPath, { locale: newLocale });
  }

  return (
    <nav className={styles["navbar-container"]}>
      <ActiveLink href="/harry-potter" label="Harry Potter" />
      <ActiveLink href="/rick-and-morty" label="Rick y Morty" />
      <button onClick={handleLocale}>{locale?.toUpperCase()}</button>
    </nav>
  );
};
