import React from "react";

function ContactForm() {
    return<><div className="container">
    <div>
        <h1>Contact Form</h1>
        <p>Making Contact</p>
    </div>
    <div className="row"><div className="columns">
    <form className="contactForm">
        <label for= "Fname">First Name</label>
        <input type="text" placeholder="First Name"/>
        <label for="Lname">Last Name</label>
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholde="enter email"/>
        <textarea>Subject</textarea>
        <input type="submit">Submit</input>
    </form>
    </div>
    </div>
     </div>
    </>
}

export default ContactForm;