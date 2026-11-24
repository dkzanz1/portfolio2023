// This component is built with react-hook-form
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [submissionStatus, setSubmissionStatus] = React.useState(null); // 'success', 'error', null

  const onSubmit = async (data) => {
    setSubmissionStatus(null);
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error(
          "Web3Forms access key is missing from environment variables.",
        );
      }

      const payload = {
        access_key: accessKey,
        ...data,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus("success");
        reset();
      } else {
        console.error("Web3Forms error response:", result);
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <form
      id="contact"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.contactForm}
    >
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

      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </button>

      {submissionStatus === "success" && (
        <div className={styles.successMessage}>
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submissionStatus === "error" && (
        <div className={styles.errorMessage}>
          An error occurred while sending your message. Please try again.
        </div>
      )}
    </form>
  );
}

export default ContactForm;
