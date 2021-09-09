import styles from "./OutstandingCard.module.css";

export default function OutstandingCard({ logo, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.card_header}>
        {logo}
        <h3 className={styles.card_header_title}>{title}</h3>
      </div>
      <div className={styles.card_body}>
        <p className={styles.card_desc}>{description}</p>
      </div>
    </article>
  );
}
