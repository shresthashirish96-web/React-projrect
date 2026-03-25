import React from "react";
import Form from "./Form.js"
import Footer from "./Footer.js";

function Contact(){
    return(
        <div className="last">
            <Form/>
            <div className="leg"><Footer /></div>
        </div>
    );
}

export default Contact;