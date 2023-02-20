import React from "react";
// import playStore from "../../../images/playstore.png";
import logo from '../assets/logo.png'
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer id="footer" className="bg-danger   ">
    
  
      <div className="leftFooter">
      <h1><a className="" href='/' ><img src={logo} alt="" width='300px'/></a></h1>
      <p> Our mission as Shopping Mall is to provide consumers with the most accurate and up-to-date information on the prices  </p>
      {/*
      <p>Download App for Android and IOS mobile phone</p>
     <img src='https://elito-light-next.netlify.app/images/logo.png' alt="playstore" />
     <img src='https://elito-light-next.netlify.app/images/logo.png' alt="Appstore" /> 
    */}
      </div>

      <div className="midFooter mt-4">
      <h4>Quick Links</h4>
  
        <a href="/ContactUs">Contact Us</a>
        <a href="/AboutUs">About Us</a>
        <a href="/Privacy">Privacy </a>
        <p>High Quality is our first priority</p>

      </div>

      <div className="rightFooter mt-4">
        <h4>Contact Us</h4>
        <a href="http://instagram.com/meabhisingh">+92-312-4709123</a>
        <a href="http://youtube.com/6packprogramemr">shopingmallofficial@gmail.com</a>
  <a href="http://instagram.com/meabhisingh">23 Takbeer Block Bahria Town Lahore</a>

        {/*   <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
  <a href="http://instagram.com/meabhisingh">Facebook</a>
*/}
      </div>
    </footer>
    <div className="d-flex flex-row justify-content-center py-4 bg-danger bg-gradient   ">
      <p className="text-white">Copyrights 2021 &copy; Muhammad Yahya</p>
      
      </div>
      </>

      );
};

export default Footer;