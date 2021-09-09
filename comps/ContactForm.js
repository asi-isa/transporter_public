import styles from "./ContactForm.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import * as cs from "classnames";

export default function ContactForm({
  onSubmitHandler,
  formRef,
  recaptchaRef,
  onReCAPTCHAChange,
  showForm,
}) {
  return (
    <form
      className={cs(styles.contact_form, !showForm && styles.hiden)}
      onSubmit={onSubmitHandler}
      ref={formRef}
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="First Name"
        required
      />
      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lname"
        placeholder="Last Name"
        required
      />
      <label htmlFor="email">Mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="mail@example.com"
        required
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="+49 0170 42424242"
        required
      />
      <label htmlFor="msg">Message</label>
      <textarea
        className={styles.msg}
        name="msg"
        id="msg"
        cols="25"
        rows="7"
        placeholder="We look forward to hearing from you and will reply to your request as soon as possible"
        required
      ></textarea>
      <button className={styles.button}>Send Message</button>
    </form>
  );
}
