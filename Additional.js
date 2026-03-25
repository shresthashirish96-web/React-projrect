import React from "react";
import "./Additional.css";
import { useState } from "react";
import Additional1 from "./additional1.jpg";
import Additional2 from "./additional2.webp";
import Additional3 from "./additional3.jpg";
import Additional4 from "./additional4.jpg";
import Additional5 from "./additional5.jpg";
import Additional6 from "./additional6.jpg";
import Form from "./Form.js"
import Footer from "./Footer.js";

function Additional(){
    const [showForm, setShowForm]=useState(false);
    return(
        <div className="additional">
            <div className="additional-title">
                <h1>Additional</h1>
                <p>Some of our additional desings.</p>
            </div>
            <div className="additional-photos">
                <div className="additional-row">
                    <img src={Additional1} alt="first"/>
                    <img src={Additional2} alt="second"/>
                    <img src={Additional3} alt="third"/>
                </div>
                <div className="additional-row">
                    <img src={Additional4} alt="fourth"/>
                    <img src={Additional5} alt="fifth"/>
                    <img src={Additional6} alt="sixth"/>
                </div>
            </div>
            {showForm?(
                <Form />
            ):(
                <div className="dream">
                <   h3>Create Your Own Dream Home.<br />
                    Tell Us About Your Project Today</h3>
                    <button onClick={() => setShowForm(true)}>Get A Free Estimate</button>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Additional;