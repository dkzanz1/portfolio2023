//This component is built with react-form-hook
import React from 'react';
import { useForm } from 'react-hook-form'
import "./ContactForm.module.css";

function ContactForm() {
  const {register, handleSubmit } = useForm();
  
 

  const onSubmit = async (data) => {
    //Statement below converts data to json
    const jsonData = JSON.stringify(data);
    // Stage 5: Simulated Server Interaction
    const response = await fetch('http://localhost:8000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: jsonData,
    });
    console.log(data);

    const result = await response.json();
    // Stage 10: Displaying Response to User
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contactform">
    <h3>Contact form</h3>
      <div>
        <label>Name
        <input
          className = "contactInput" 
          type="text"
          autoComplete="on"
          {...register("name",{ required: 'Name is required' })}
          />
          {/* {errors.name && <span>{errors.name.message}</span>} */}
        </label>
      </div>

      <div>
        <label >Email
        <input
          className = "contactInput" 
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
        <label >Message
        <textarea
        className = "contactInput" 
          
          {...register("message",{ required: 'Message is required' })}
        />
        {/* {errors.message && <span>{errors.message.message}</span>} */}
        </label>
      </div>

      <button type="submit" className = "button" >Submit</button>
    </form>
  );
}

export default ContactForm;
