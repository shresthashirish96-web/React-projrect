import React, { useState } from "react";
import "./About.css";
import home from "./home.jpg";
import design from "./design.jpg";
import onsite from "./con.jpg";
import touch from "./touch.avif";
import Form from "./Form.js";
import Footer from "./Footer.js";

function About(){
    const [showForm, setShowForm] = useState(false);
    return(
        <div className="about">
            <div className="dis">
                <h1>About R&R Remodeling</h1>
                <p>R&R Remodeling is a craftsmanship-driven 
                    company specializing in high-quality wooden
                     remodeling solutions that blend durability,
                      functionality, and timeless design. With a
                       strong focus on natural materials and 
                       precision workmanship, the company 
                       transforms residential and commercial 
                       spaces through custom wood installations,
                        including flooring, cabinetry, wall 
                        paneling, and structural enhancements. 
                        R&R Remodeling takes pride in combining
                         traditional woodworking techniques with
                          modern design aesthetics, ensuring each
                           project reflects both elegance and 
                           practicality. From small interior
                            upgrades to full-scale renovations, 
                            the team is committed to delivering 
                            personalized results, using sustainably
                             sourced wood and meticulous attention 
                             to detail to create warm, inviting 
                    environments that stand the test of time.</p>
            </div>
            <div className="pho">
                <h1>Abc</h1>
            </div>
            <div className="process">
                <h1>Our Process</h1>
                <p>At R&R Remodeling, our process is designed to ensure a smooth, transparent, and high-quality experience from start to finish. We begin with an in-depth consultation to understand your vision, needs, and budget, followed by a detailed design phase where ideas are transformed into practical plans. Once approved, we carefully select premium wood materials and begin the remodeling work with precision and craftsmanship. Throughout the project, we maintain clear communication, keeping you updated at every step. Finally, we complete a thorough inspection to ensure every detail meets our standards and your expectations, delivering a beautifully crafted space built to last.</p>
            </div>
            <div className="state">
                <div className="det-row">
                    <img src={home} alt="design" />
                    <div className="bakas">
                        <h3>Preconstruction
                            <br></br>Design
                        </h3>
                        <p>At R&R Remodeling, 
                            the pre-construction design phase is 
                            where ideas take shape and the foundation 
                            for a successful project is built. During 
                            this stage, we work closely with clients to 
                            understand their vision, lifestyle needs, and 
                            design preferences while evaluating the existing 
                            space</p>
                    </div>
                    <img src={design} alt="design" />
                    <div className="bakas">
                        <h3>Design<br />Construction <br/>Estimate</h3>
                        <p>At R&R Remodeling, our design and construction estimate process is built on accuracy, transparency, and trust. Once the design concept is finalized, we provide a detailed estimate that outlines the full scope of work, material costs, labor, and project timeline.</p>
                    </div>
                </div>
                <div className="det-row">
                    <div className="bakas">
                        <h3>On-Site<br /> Consultation</h3>
                        <p>At R&R Remodeling, our on-site consultation is a crucial step in bringing your vision to life. During this phase, our team visits your space to assess the existing structure, take precise measurements, and better understand the layout and conditions.</p>
                    </div>
                    <img src={onsite} alt="onsite" />
                    <div className="bakas">
                        <h3>The Finishing<br /> Touch</h3>
                        <p>At R&R Remodeling, the finishing touch is where every detail comes together to bring your project to life. After construction is complete, our team carefully inspects every element, ensuring the highest standards of craftsmanship and quality are met.</p>
                    </div>
                    <img src={touch} alt="touch" />
                </div>
            </div>
            <div className="guarantee">
                <h1>Our Quality Guarantee</h1>
                <p>At R&R Remodeling, we are committed to delivering exceptional quality in every project we undertake. From the selection of premium wood materials to the precision of our craftsmanship, every detail is handled with care and expertise. Our goal is to create durable, beautiful spaces that not only meet but exceed your expectations.</p>
                <p>We take pride in maintaining high standards throughout every stage of the remodeling process. Our experienced team ensures that each element is carefully executed, with a strong focus on accuracy, strength, and long-lasting performance. By combining skilled workmanship with reliable materials, we guarantee results you can trust.</p>
                <p>Customer satisfaction is at the heart of everything we do. We stand behind our work and are dedicated to making sure you are fully satisfied with the final outcome. With R&R Remodeling, you can feel confident knowing your investment is protected by our unwavering commitment to quality and excellence.</p>
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

export default About;