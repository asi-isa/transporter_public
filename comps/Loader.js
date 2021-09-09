import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <article className={styles.loader}>
      <img src="/images/loader.gif" alt="loading..." />
      <h2>Sending...</h2>
    </article>
  );
}
