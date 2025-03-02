//This component is built with react-form-hook
import React from 'react';
import { useForm } from 'react-hook-form'
import styles from "./ContactForm.module.css";

function ContactForm() {
  const {
    register, 
    handleSubmit, 
    formState:{ errors },
    reset,
   } = useForm();

const [submissionStatus, setSubmissionStatus] = React.useState(null); // 'success', 'error', null

const onSubmit = async (data) => {
    setSubmissionStatus(null); // Reset status
try {
    const jsonData = JSON.stringify(data);//Statement converts data to json
    const response = await fetch('http://localhost:8000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    });
    // console.log(data)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };

    const result = await response.json();
    //  Displaying Response to User
    console.log(result);
    //add success message here
    setSubmissionStatus('success');
      reset(); // Clear form on success
  } catch (error) {
    console.error("Error submitting form:", error);
    setSubmissionStatus('error');
    // Add error message here.
}
};

  return (
  <form onSubmit={handleSubmit(onSubmit)} className = {styles.contactForm}>
    <h3>Contact form</h3>
      <div>
        <label>
        Name
        <input
          className = {styles.contactInput} 
          type="text"
          autoComplete="on"
          {...register("name",{ required: 'Name is required' })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
      </div>

      <div>
        <label>
        Email
        <input
          className = {styles.contactInput} 
          type="email"
          autoComplete="on"
          // name="email"
          {...register("email",{
            required: 'Email is required',
            pattern: /^\S+@\S+$/i,
          })}
        />
        {/* {errors.email && <span>{errors.email.message}</span>} */}
        </label>
      </div>

      <div>
        <label >
        Message
        <textarea
        className = {styles.contactInput} 
        {...register("message",{ required: 'Message is required' })}
        />
        {/* {errors.message && <span>{errors.message.message}</span>} */}
        </label>
      </div>

      <button type="submit" className = {styles.button} >
      Submit
      </button>
      {submissionStatus === 'success' && (
        <div style={{ color: 'green', marginTop: '10px' }}>
          Thank you! Your message has been sent.
        </div>
      )}

      {submissionStatus === 'error' && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          An error occurred while sending your message. Please try again.
        </div>
      )}
    </form>
  );
}

export default ContactForm;
