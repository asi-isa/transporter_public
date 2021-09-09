import styles from "./Alert.module.css";
import * as cs from "classnames";

export default function Alert({ isError }) {
  return (
    <article
      className={cs(styles.alert, isError ? styles.error : styles.success)}
    >
      <h3>{isError ? "Error" : "Success"}</h3>
      <p className={styles.msg}>
        {isError
          ? "Something went wrong. Please try again or contact us via an email or a phone call."
          : "Our team will reply to you within 24 hours. You will be redirected to the homepage."}
      </p>
      <p>
        {isError ? "Please excuse the inconvenience caused." : "Thank You :)"}
      </p>
    </article>
  );
}
