import React from 'react';
import logo from '../img/logo.png';

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="grid-container">
        <div className="logo">
          <img src={logo} alt="Logo"/>
          <p>JavaJolt Roasters</p>
          <div className="footer-icons">

            <a style={iconStyle} href="#"><FaFacebook size={40} style={{ color:"blue",  paddingRight: '5px',
	marginBottom: "5px"}}/></a>
            <a style={iconStyle} href="#"><FaTwitter size={40}  style={{  color:"blue",marginRight: '3px',
	marginBottom: "5px"}}/></a>
            <a  style={iconStyle} href="#"><FaInstagram size={40}  style={{  color:"black", marginRight: '3px',
	marginBottom: "5px"}}/></a>
            <a  style={iconStyle} href="#"><FaGoogle size={40}  style={{  color:"white", marginRight: '3px',
	marginBottom: "5px"}}/></a>
            <a style={iconStyle} href="#"><FaYoutube size={40}  style={{ color:"red", marginRight: '3px',
	marginBottom: "5px"}}/></a>
          </div>
        </div>
        <div className="footer-info">
          <h3><pre>     Contact</pre></h3>
          <div className='info'>

            <p><pre><FaLocationDot size={40}  style={{color:'#FBBC04'}}/> 4140 Parker Rd.<br></br>   Allentown, New<br></br>   Mexico 31134</pre></p>

           
            <p> <pre><BsTelephone size={40} style={{color:'#FBBC04'}} /> (319) 555-0115 </pre></p>
          </div>
        </div>
      </div>
    </div>
  );
}
const iconStyle = {
  display: 'inline-block',
  width: '48px',
  height: '48px',
  cursor: 'pointer',
  fontSize: '20px',
  textAlign: 'center',
  lineHeight: '8rem',
};
export default Footer;

