import styles from "./ContactSection.module.css";
import Router from "next/router";
import { useState, useRef } from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Loader from "./Loader";
import Alert from "./Alert";

export default function ContactSection() {
  const [showForm, setShowForm] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(false);
  const recaptchaRef = useRef();
  const formRef = useRef();

  async function onSubmitHandler(e) {
    e.preventDefault();
    setShowLoader(true);
    setShowForm(false);

    // Execute the reCAPTCHA when the form is submitted
    await recaptchaRef.current.execute();
  }

  async function onReCAPTCHAChange(captchaCode) {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) return;

    const data = { captcha: captchaCode };

    Array.from(formRef.current.elements).forEach((field) => {
      if (!field.value.trim()) return;
      console.log(field.name, field.value);
      data[field.name] = field.value;
    });

    try {
      const response = await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setShowLoader(false);
      setShowAlert(true);
      if (response.ok) {
        // If the response is ok than show the success alert
        console.log("success");
        setTimeout(() => {
          Router.push("/");
        }, 2500);
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      setError(true);
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another form.
      recaptchaRef.current.reset();
    }
  }
  return (
    <section className={styles.contact_section}>
      <h1>Contact Us</h1>
      <ContactInfo />

      <ContactForm
        onSubmitHandler={onSubmitHandler}
        formRef={formRef}
        recaptchaRef={recaptchaRef}
        onReCAPTCHAChange={onReCAPTCHAChange}
        showForm={showForm}
      />

      {showLoader && <Loader />}

      {showAlert && <Alert isError={error} />}
    </section>
  );
}
