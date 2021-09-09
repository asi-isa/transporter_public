import mail from "@sendgrid/mail";
import fetch from "node-fetch";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  console.log(req.body);
  console.log(req.method);
  const { method } = req;
  const { captcha } = req.body;

  if (method === "POST") {
    // If captcha is missing return an error
    if (!captcha) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        }
      );
      const captchaValidation = await response.json();
      /**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
      if (captchaValidation.success) {
        // Replace this with the API that will save the data received
        // to your backend
        const { body } = req;
        console.log(body);
        const { fname, lname, email, phone, msg } = body;

        const message = `
          Name: ${fname} ${lname}\r\n
          Email: ${email}\r\n
          Phone: ${phone}\r\n
          Message: ${msg}\r\n
        `;

        const data = {
          to: "ali.inceoglu@protonmail.com",
          from: "info@isatech.tech",
          subject: `New Request from ${body.email}`,
          text: message,
          html: message.replace(/\r\n/g, "<br>"),
        };

        console.log("hier vllt");
        const sendMail = await mail.send(data);
        console.log("sendmail", sendMail);
        // Return 200 if everything is successful
        return res.status(200).send("OK");
      }

      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
      });
    } catch (error) {
      console.log("error", error);
      return res.status(422).json({ message: "Something went wrong" });
    }
  }

  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(404).send("Not found");
};
