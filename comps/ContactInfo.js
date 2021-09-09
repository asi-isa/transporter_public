import styles from "./ContactInfo.module.css";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function ContactInfo() {
  return (
    <article className={styles.contact_info}>
      <h2 className={styles.contact_info_title}>Contact Information</h2>
      <p className={styles.contact_info_description}>
        Our Team will reply to you within 24 hours.
      </p>
      <div className={styles.contact_info_row}>
        <AiOutlinePhone /> +49 06008 1234567
      </div>
      <div className={styles.contact_info_row}>
        <AiOutlineMail /> customer@logistic.com
      </div>
      <div className={styles.contact_info_row}>
        <GoLocation /> Street 42, 68159 City
      </div>
      <div className={styles.social}>
        <a href="#">
          <FiFacebook />
        </a>
        <a href="#">
          <FiTwitter />
        </a>
        <a href="#">
          <FiInstagram />
        </a>
      </div>
    </article>
  );
}
