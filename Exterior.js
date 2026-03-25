import React from "react";
import "./Exterior.css";
import { useState } from "react";
import Exterior1 from "./exterior1.jpg";
import Exterior2 from "./exterior2.jpg";
import Exterior3 from "./exterior3.jpg";
import Exterior4 from "./exterior4.jpg";
import Exterior5 from "./exterior5.webp";
import Exterior6 from "./exterior6.jpg";
import Form from "./Form";
import Footer from "./Footer";

function Exterior(){
    const[showForm, setShowForm]=useState(false);
    return(
        <div className="exterior">
            <div className="exterior-title">
                <h1>Exterior</h1>
                <p>Some of our exterior designs</p>
            </div>
            <div className="exterior-photos">
                <div className="exterior-row">
                    <img src={Exterior1} alt="first" />
                    <img src={Exterior2} alt="second" />
                    <img src={Exterior3} alt="third" />
                </div>
                <div className="exterior-row">
                    <img src={Exterior4} alt="fourth" />
                    <img src={Exterior5} alt="fifth" />
                    <img src={Exterior6} alt="sixth" />
                </div>
            </div>
            {showForm? (
                <Form />
            ):(
                <div className="dream">
                    <h3>Create Your Own Dream Home.<br />
                    Tell Us About Your Project Today</h3>
                    <button onClick={() => setShowForm(true)}>Get A Free Estimate</button>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Exterior;