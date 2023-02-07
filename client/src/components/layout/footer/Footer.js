import React from "react";
// import playStore from "../../../images/playstore.png";
import logo from '../assets/logo.png'
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="bg-danger">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
       <img src='https://elito-light-next.netlify.app/images/logo.png' alt="playstore" />
  <img src='https://elito-light-next.netlify.app/images/logo.png' alt="Appstore" /> 
      </div>

      <div className="midFooter">
      <h1><a className="" href='/' ><img src={logo} alt="" width='300px'/></a></h1>
        <a href="/ContactUs">Contact Us</a>
        <a href="/AboutUs">About Us</a>
        <a href="/Privacy">Privacy </a>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Muhammad Yahya</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;