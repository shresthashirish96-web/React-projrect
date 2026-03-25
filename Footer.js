import React from "react";
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
            <div className="the">
                    <p>@2026 by R&R Remodeling Powered and Secured by Abc</p>
            </div>
            <div className="icon">
                <a
                    href="https://www.facebook.com/shirish.shrestha.100320"
                    target="blank"
                    rel="noopener noreferrer" 
                >
                    <FaFacebook size={20} color="#000000"/>
                </a>
                <a
                    href="https://www.instagram.com/shirish_sthas/"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram size={20} color="#000000"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;