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
        <label className="contactInput">Enter your name :-<span style={{color: "black"}}>-----</span>
            <input type="text" name="username" value= {inputs.username || ""} onChange={handleChange} placeholder="First name" className="c"/>
        </label>
        <label className="contactInput">Enter your Surname  :-
            <input type="text" name="username" value= {inputs.username || ""} onChange={handleChange} placeholder="Surname"/>
        </label>
        <label className="contactInput">Enter your Email :-<span style={{color: "black"}}>-----</span>
            <input type="text" name="username" value= {inputs.username || ""} onChange={handleChange} placeholder="Email"/>
        </label>
 </form>
    )
}

    


export default ContactForm;