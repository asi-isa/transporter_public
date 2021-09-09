import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <div className={styles.logo_container}>
      <Link href="/">
        <a className={styles.logo}>logistic</a>
      </Link>
      <img src="images/logo.svg" alt="logo" className={styles.logo_img} />
    </div>
  );
}
