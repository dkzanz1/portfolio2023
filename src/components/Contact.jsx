<<<<<<< HEAD
// import React from "react";
import {useState} from "react";




function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", textarea:"",  });


    const handleChange = (event) => {
        const changedField = event.target.name;
        const newValue = event.target.value;
        setFormData(currData => {
            currData[changedField]=newValue;
            return {...currData};
    })
}
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        
    } 
    return (<>
        <h3>Contact</h3>
    <form className="contactform">
        
        <div  >
        <label htmlFor="name" className="">Enter your name :-<span style={{color: "black"}}>------</span></label>
            <input type="text"
             name="username" 
             value= {formData.username || ""} 
             onChange={handleChange} 
             placeholder="First name" 
             id="name"
             autoComplete="on"
             />
        
        <label htmlFor="email" className="">Enter your email:-<span style={{color: "black"}}>------</span></label>
      
            <input type="email"
             name="email" 
             value= {formData.email || ""} 
             onChange={handleChange} 
             placeholder="email"
             id="email"
             autoComplete="on"
             />
        <label htmlFor="message" className="">Enter your message :-<span style={{color: "black"}}>------</span></label>
       
            <textarea type="text" 
            name="message" 
            value= {formData.message || ""} 
            onChange={handleChange} 
            placeholder="message "
            id = "message"
            />
            <button  onClick={handleSubmit}>Submit</button>
        
        </div>
 </form>
 </>
    )
}

=======
import React from "react";
import {useState} from "react"
// import ReactDOM from 'react-dom/client';

function ContactForm() {
    const [inputs, setInputs ] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    } 
    return (
    <form onSubmit = {handleSubmit} className="contactform">
        <h3>Contact</h3>
        <div className="contactcontents">
        <label className="contactInput">Enter your name :-<span style={{color: "black"}}>------</span>
            <input type="text" name="username" value= {inputs.username || ""} onChange={handleChange} placeholder="First name " />
        </label>
        <label className="contactInput">Enter your Surname :-<span style={{color: "black"}}>-</span>
            <input type="text" name="username" value= {inputs.username || ""} onChange={handleChange} placeholder="Surname"/>
        </label>
        <label className="contactInput">Enter your Email :-<span style={{color: "black"}}>------</span>
            <input type="text" name="username" value= {inputs.username || ""} onChange={handleChange} placeholder="Email "/>
        </label>
        </div>
 </form>
    )
}

    


>>>>>>> af17b5e11282af90b7bda7c7e2df27f79d19b662
export default ContactForm;