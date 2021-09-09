import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container">
      <div className={styles.hero}>
        <img
          className={styles.hero_img}
          src="images/highway-truck.jpg"
          alt="truck on highway"
        />
        <div className={styles.hero_info}>
          <h1 className={styles.hero_title}>Successfull Transports</h1>
          <p className={styles.hero_description}>
            Our mission is to successfully transport your propertys from the
            beginning to the end.
          </p>
          <div className={styles.hero_ctas}>
            <Link href="/#solutionSection">
              <a className={styles.hero_cta_outline}>our solutions</a>
            </Link>
            <Link href="/contact">
              <a className={styles.hero_cta}>contact us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
