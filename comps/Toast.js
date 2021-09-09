import styles from "./Toast.module.css";

export default function Toast({ workName, pubDate, description, workDate }) {
  return (
    <article className={styles.toast}>
      <div className={styles.header}>
        <h3 className={styles.heading}>{workName}</h3>
        <p className={styles.pub_date}>{pubDate}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.work_date}>Entry date: {workDate}</p>
    </article>
  );
}
