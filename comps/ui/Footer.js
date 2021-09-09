import styles from "./Footer.module.css";
import Link from "next/link";

import FooterHero from "../FooterHero";

export default function FooterNew() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_copyright_impressum}>
        <p>
          &#169;2021 logistic&#174; by{" "}
          <a href="https://isatech.tech" className={styles.isatech}>
            isatech UG
          </a>
        </p>
        <Link href="/">
          <a>Imprint & Data Privacy</a>
        </Link>
      </div>
    </footer>
  );
}
