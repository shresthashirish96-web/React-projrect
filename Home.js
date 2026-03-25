import React from "react";
import "./Home.css";
import { FaQuoteRight } from "react-icons/fa6";
import Form from  "./Form.js";
import evergreen from "../images/evergreen.png";
import nova from "../images/novatech.png";
import pinnacle from "../images/pinnacle.png";
import quantum from "../images/quantum.png";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";

 
function Home() {
    const navigate = useNavigate();
    return(
        <div className="all">
            <div className="main">
            <div className="head">
                <h1>Exceptional Home
                <br></br>
                Remodeling &
                <br></br>
                Renovations</h1>
            </div>
            <button onClick={()=>navigate("/contact")}>Get a free estimate</button>
            </div>
            <div className="bod">
                <div className="pic">
                    <h1>hi</h1>
                </div>
                <div className="wit">
                    <h1>The Leading Bay Area
                        <br></br>
                        Remodeling Company
                    </h1>
                    <p>Kitchen design is a timeless and elegant
                         choice that combines natural beauty with
                          functionality. It uses wood as the primary
                           material
                         for cabinets, shelves, countertops,
                         or decorative elements, creating a
                          warm and welcoming kitchen environment
                          . This design appeals to customers who
                           value durability, comfort, and a classic 
                           yet modern 
                         appearance.
                    </p>
                    <button onClick={()=>navigate("/about")}> More About Us</button>
                </div>
            </div>
            <div className="why">
                <h1>WHY CHOOSE US?</h1>
                <div className="containers">
                    <div className="contain">
                        <h3>Easy<br></br>
                        Financing</h3>
                        <p>Easy financing offered by a remodeling company 
                            helps homeowners upgrade their 
                            spaces without the burden of 
                            large upfront costs.
                        </p>
                    </div>
                    <div className="contain">
                        <h3>Free, At Home
                            <br></br>
                        Consultation
                        </h3>
                        <p>A free, at-home consultation allows 
                            homeowners to discuss their remodeling needs with 
                            professionals in the comfort of their own space.
                        </p>
                    </div>
                    <div className="contain">
                        <h3>Award Winning
                            <br></br>
                            Service
                        </h3>
                        <p>Award-winning remodeling services signify a 
                            company's
                            excellence and commitment to quality in home 
                            renovation projects.
                        </p>
                    </div>
                    <div className="contain">
                        <h3>Licensed &
                            <br></br>
                            Insured
                        </h3>
                        <p>Licensed and insured remodeling companies provide homeowners with confidence and protection during renovation projects.</p>
                    </div>
                </div>
            </div>
            <div className="include">
                <h1>OUR SERVICE INCLUDE</h1>
                <div className="boxes">
                    <div className="box1">
                        <h5>Kitchen</h5>
                    </div>
                    <div className="box2">
                        <h5>Bathroom</h5>
                    </div>
                    <div className="box3">
                        <h5>Interior</h5>
                    </div>
                </div>
                <button onClick={()=>navigate("/service")}>See All Services</button>
            </div>
            <div className="customer">
                <h1>Satisfied Customers</h1>
                <div className="cus">
                    <div className="cus1">
                    <FaQuoteRight fill="#000000" size={70} />
                    <p>The remodeling team did an amazing job on our kitchen. The work was completed on time, the quality was excellent, and the crew was very respectful of our home. Their easy financing options made it affordable for us to start right away. We’re extremely happy with the results.</p>
                    <h2>Dave Reddington</h2>
                </div>
                <div className="cus2">
                    <FaQuoteRight fill="#000000" size={70} />
                    <p>From consultation to completion, everything was smooth and professional. They clearly explained the process, helped us choose the right design, and delivered exactly what they promised. The flexible payment plans were a big plus and made the remodeling experience stress-free.</p>
                    <h2>Amelia Banks</h2>
                </div>
                <div className="cus3">
                    <FaQuoteRight fill="#000000" size={70} />
                    <p>We couldn’t be more satisfied with our remodeling project. The craftsmanship was top-notch, and the team communicated with us at every step. Thanks to their easy financing, we were able to upgrade our home without financial pressure. Highly recommended!</p>
                    <h2>Kenny Stutes</h2>
                </div>
                </div>
            </div>
            <div>
                    <Form />
            </div>
            <div className="foot">
                <div className="images">
                    <img src={evergreen} alt="evergreen" />
                    <img src={nova} alt="nova" />
                    <img src={pinnacle} alt="pinnacle" />
                    <img src={quantum} alt="quantum" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;