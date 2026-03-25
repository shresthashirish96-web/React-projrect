import React, { useState } from "react";
import "./Service.css";
import Kitchen from "./kit.jpg";
import Bathroom from "./bathroom.jpg";
import Bedroom from "./bedroom.jpg";
import Additional from "./additional.jpg";
import Exterior from "./Exterior.jpg";
import Sunroom from "./Sunroom.jpg";
import Form from "./Form";
import Footer from "./Footer";

function Service(){
    const [showForm, setShowForm] =useState(false);
    return(
        <div className="ser">
            <div className="main-service">
                <h1>Our Service</h1>
                <p>Let us help you make your dreams a reality.</p>
            </div>
            <div className="service-detail">
                <div className="service-row">
                    <div className="service-box">
                        <img src={Kitchen} alt="kitchen" />
                        <h2>Kitchen</h2>
                        <p>A bright, modern kitchen with light wood cabinets, a marble island with a sink, hanging glass lights, and an arched doorway—clean, elegant, and warm in style.</p>
                    </div>
                    <div className="service-box">
                        <img src={Bathroom} alt="Bathroom" />
                        <h2>Bathroom</h2>
                        <p>A modern, minimalist bathroom with soft neutral tones, an oval mirror, a floating vanity, and a glass-enclosed shower—clean, sleek, and elegant.</p>
                    </div>
                    <div className="service-box">
                        <img src={Bedroom} alt="bedrrom design"/>
                        <h2>Interior</h2>
                        <p>A modern bedroom with a large bed, wooden accent wall, soft lighting, and natural light from big windows, creating a warm and cozy feel.</p>
                    </div>
                </div>
                <div className="service-row">
                    <div className="service-box">
                        <img src={Additional} alt="additional" />
                        <h2>Additional</h2>
                        <p>A covered outdoor patio with a stone floor, wood-paneled ceiling, ceiling fan, and a grill, creating a cozy space for relaxing or cooking.</p>
                    </div>
                    <div className="service-box">
                        <img src={Exterior} alt="Exterior"/>
                        <h2>Exterior</h2>
                        <p>A modern two-story house with a tiled roof, balcony, large windows, and a car parked in front, surrounded by greenery.</p>
                    </div>
                    <div className="service-box">
                        <img src={Sunroom} alt="Sunroom" />
                        <h2>Sunroom</h2>
                        <p>A bright, cozy sunroom with wicker furniture, plants, and a wooden table, filled with natural light.</p>
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

export default Service;