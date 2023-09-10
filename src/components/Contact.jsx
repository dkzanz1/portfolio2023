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

export default ContactForm;