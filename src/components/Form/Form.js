import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormStyles.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d46j47e",
        "template_f0z5wrv",
        form.current,
        "a6am9vhWgrBBkE5eY"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Subject</label>
        <input type="text" name="subject" required />
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message here"
          required
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>

        <a
          href="/Nandkishor_Metange_Resume.pdf"
          download
          className="btn btn-secondary"
        >
          <i className="fas fa-download"></i> Download Resume
        </a>
      </form>
    </div>
  );
};

export default Form;
