// import styles from "./ContactCard.module.css";
// import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
// import { GoLocation } from "react-icons/go";
// import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

// import ReCAPTCHA from "react-google-recaptcha";
// import { useRef, useState } from "react";

// export default function ContactCard() {
//   const [sending, setSending] = useState(true);
//   const recaptchaRef = useRef();
//   const formRef = useRef();
//   // useState sending loader
//   async function onSubmitHandler(e) {
//     e.preventDefault();
//     setSending(true);
//     // Execute the reCAPTCHA when the form is submitted
//     recaptchaRef.current.execute();
//   }

//   async function onReCAPTCHAChange(captchaCode) {
//     // If the reCAPTCHA code is null or undefined indicating that
//     // the reCAPTCHA was expired then return early
//     if (!captchaCode) return;

//     const data = { captcha: captchaCode };

//     Array.from(formRef.current.elements).forEach((field) => {
//       if (!field.value.trim()) return;
//       console.log(field.name, field.value);
//       data[field.name] = field.value;
//     });

//     try {
//       const response = await fetch("/api/mail", {
//         method: "post",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       setSending(false);
//       if (response.ok) {
//         // If the response is ok than show the success alert
//         alert("Success");
//       } else {
//         // Else throw an error with the message returned
//         // from the API
//         const error = await response.json();
//         throw new Error(error.message);
//       }
//     } catch (error) {
//       console.log("diese");
//       alert(error?.message || "Something went wrong");
//     } finally {
//       // Reset the reCAPTCHA when the request has failed or succeeeded
//       // so that it can be executed again if user submits another form.
//       recaptchaRef.current.reset();
//     }
//   }

//   return (
//     <section>
//       <div className={styles.contact_card}>
//         <div className={styles.contact_info}>
//           <h2 className={styles.contact_info_title}>Contact Information</h2>
//           <p className={styles.contact_info_description}>
//             Our Team will reply to you within 24 hours.
//           </p>
//           <div className={styles.contact_info_row}>
//             <AiOutlinePhone /> +49 06008 1234567
//           </div>
//           <div className={styles.contact_info_row}>
//             <AiOutlineMail /> customer@logistic.com
//           </div>
//           <div className={styles.contact_info_row}>
//             <GoLocation /> Street 42, 68159 City
//           </div>
//           <div className={styles.social}>
//             <a href="#">
//               <FiFacebook />
//             </a>
//             <a href="#">
//               <FiTwitter />
//             </a>
//             <a href="#">
//               <FiInstagram />
//             </a>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// }
