// This component is built with react-hook-form
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submissionStatus, setSubmissionStatus] = React.useState(null); // 'success', 'error', null

  const onSubmit = async (data) => {
    setSubmissionStatus(null);
    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setSubmissionStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <h3>Contact form</h3>
      <div>
        <label>
          Name
          <input
            className={styles.contactInput}
            type="text"
            autoComplete="on"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className={styles.errorText}>{errors.name.message}</span>
          )}
        </label>
      </div>

      <div>
        <label>
          Email
          <input
            className={styles.contactInput}
            type="email"
            autoComplete="on"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email.message}</span>
          )}
        </label>
      </div>

      <div>
        <label>
          Message
          <textarea
            className={styles.contactInput}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className={styles.errorText}>{errors.message.message}</span>
          )}
        </label>
      </div>

      <button type="submit" className={styles.button}>
        Submit
      </button>

      {submissionStatus === "success" && (
        <div style={{ color: "green", marginTop: "10px" }}>
          Thank you! Your message has been sent.
        </div>
      )}

      {submissionStatus === "error" && (
        <div style={{ color: "red", marginTop: "10px" }}>
          An error occurred while sending your message. Please try again.
        </div>
      )}
    </form>
  );
}

export default ContactForm;
