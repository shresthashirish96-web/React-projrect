import React from "react";
import "./Bathroom.css"
import Bathroom1 from "./bathroom1.jpg";
import Bathroom2 from "./bathroom2.jpg";
import Bathroom3 from "./bathroom3.jpg";
import Bathroom4 from "./bathroom4.jpg";
import Bathroom5 from "./bathroom5.jpg";
import Bathroom6 from "./bathroom6.jpg";
import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";

function Bathroom(){
    const [showForm, setShowForm] = useState(false);
    return(
        <div className="bathroom">
            <div className="bathroom-title">
                <h1>Bathroom</h1>
                <p>Some bathroom design we made</p>
            </div>
            <div className="bathroom-photos">
                <div className="bathroom-row">
                    <img src={Bathroom1} alt="first"/>
                    <img src={Bathroom2} alt="second"/>
                    <img src={Bathroom3} alt="third"/>
                </div>
                <div className="bathroom-row">
                    <img src={Bathroom4} alt="forth"/>
                    <img src={Bathroom5} alt="fifth"/>
                    <img src={Bathroom6} alt="sixth"/>
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
 
export default Bathroom;