import React from "react";
import "./Kitchen.css";
import Kitchen1 from "./kit1.jpg";
import Kitchen2 from "./kit2.avif";
import Kitchen3 from "./kit3.jpg";
import Kitchen4 from "./kit4.jpg";
import Kitchen5 from "./kit5.jpg";
import Kitchen6 from "./kit6.webp";
import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";


function Kitchen(){
    const [showForm, setShowForm]=useState(false);
    return(
        <div className="kitchen">
            <div className="kitchen-title">
                <h1>Kitchens</h1>
                <p>Some of the kitchen design we have made</p>
            </div>
            <div className="kitchen-photos">
                <div className="kitchen-row">
                    <img src={Kitchen1} alt="first"/>
                    <img src={Kitchen2} alt="second" />
                    <img src={Kitchen3} alt="third" />
                </div>
                <div className="kitchen-row">
                    <img src={Kitchen4} alt="fourth" />
                    <img src={Kitchen5} alt="fifth" />
                    <img src={Kitchen6} alt="sixth" />
                </div>
            </div>
            {showForm ?(
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
    )
}

export default Kitchen;