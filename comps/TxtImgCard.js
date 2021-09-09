import styles from "./TxtImgCard.module.css";
import Link from "next/link";

export default function TxtImgCard({
  subheading,
  heading,
  desccription,
  link,
  imgName,
  ctaText,
}) {
  return (
    <article className={styles.txtImgCard}>
      <div className={styles.info}>
        <p className={styles.info_subheading}>{subheading}</p>
        <h2 className={styles.info_heading}>{heading}</h2>
        <p className={styles.info_description}>{desccription}</p>
        <Link href={link}>
          <a className={styles.info_cta}>{ctaText ? ctaText : "more info"}</a>
        </Link>
      </div>
      <div
        className={styles.img_container}
        style={{ backgroundImage: `url(${imgName})` }}
      ></div>
    </article>
  );
}
