import React from "react";
import "./Sunroom.css"
import Sunroom1 from "./sunroom1.jpg";
import Sunroom2 from "./sunroom2.jpg";
import Sunroom3 from "./sunroom3.avif";
import Sunroom4 from "./sunroom4.jpg";
import Sunroom5 from "./sunroom5.jpg";
import Sunroom6 from "./sunroom6.jpg";
import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";

function Sunroom(){
    const[showForm,setShowForm]=useState(false);
    return(
        <div className="sunroom">
            <div className="sunroom-title">
                <h1>Sunroom</h1>
                <p>Some of the sunroom desigin we made</p>
            </div>
            <div className="sunroom-photos">
                <div className="sunroom-row">
                    <img src={Sunroom1} alt="first" />
                    <img src={Sunroom2} alt="second" />
                    <img src={Sunroom3} alt="third" />
                </div>
                <div className="sunroom-row">
                    <img src={Sunroom4} alt="fourth" />
                    <img src={Sunroom5} alt="fifth" />
                    <img src={Sunroom6} alt="sixth" />
                </div>
            </div>
            {showForm?(
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

export default Sunroom;