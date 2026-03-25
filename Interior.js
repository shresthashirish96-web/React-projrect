import React from "react";
import "./Interior.css";
import Interior1 from "./interior1.jpg";
import Interior2 from "./interior2.jpg";
import Interior3 from "./interior3.jpg";
import Interior4 from "./interior4.jpg";
import Interior5 from "./interior5.webp";
import Interior6 from "./interior6.avif";
import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";

function Interior(){
    const [showForm, setShowForm]= useState(false);
    return(
        <div className="interior">
            <div className="interior-title">
                <h1>Interior</h1>
                <p>Some of the Interior design we have made</p>
            </div>
            <div className="interior-photos">
                <div className="interior-row">
                    <img src={Interior1} alt="First"/>
                    <img src={Interior2} alt="Second"/>
                    <img src={Interior3} alt="Third"/>
                </div>
                <div className="interior-row">
                    <img src={Interior4} alt="Forth"/>
                    <img src={Interior5} alt="Fifth"/>
                    <img src={Interior6} alt="Sixth"/>
                </div>
            </div>
            {showForm ?(
                <Form/>
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

export default Interior;