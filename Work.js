import React from "react";
import "./Work.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";

function Work(){
    const [showForm, setShowForm]=useState(false);
    const navigate = useNavigate();
    return(
        <div className="work">
            <div className="work-title">
                <h1>Our Work</h1>
                <p>You're invited to browse a selection of recently completed projects below.</p>
            </div>
            <div className="worked">
                <div className="work-row">
                    <div className="work-box1" onClick={() => navigate("/kitchen")}>
                        <h3>Kitchens</h3>
                    </div>
                    <div className="work-box2" onClick={()=>navigate("/bathroom")}>
                        <h3>Bathroom</h3>
                    </div>
                    <div className="work-box3" onClick={()=>navigate("/interior")}>
                        <h3>Interior</h3>
                    </div>
                </div>
                <div className="work-row">
                    <div className="work-box4" onClick={()=>navigate("/additional")}>
                        <h3>Additional</h3>
                    </div>
                    <div className="work-box5" onClick={() => navigate("/exterior")}>
                        <h3>Exterior</h3>
                    </div>
                    <div className="work-box6" onClick={()=>navigate("/sunroom")}>
                        <h3>Sunroom</h3>
                    </div>
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
    );
}

export default Work;