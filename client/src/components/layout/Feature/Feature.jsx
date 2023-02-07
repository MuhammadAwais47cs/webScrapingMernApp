import React from "react";
// import playStore from "../../../images/playstore.png";
import logo from '../assets/logo.png'
import approved from '../assets/feature-approved.svg';
import delivery from '../assets/feature-delivery.svg';
import shipping from '../assets/feature-shipping.svg';
import warranty from '../assets/feature-warranty.svg';
// import appStore from "../../../images/Appstore.png";
const svg = [warranty, approved, delivery, shipping,]
const Footer = () => {
  return (
    <footer id="footer" className="bg-light">
      <div className="d-flex flex-row justify-content-evenly">
        {svg.map((svg, i) => (
          <img src={svg} key={i} alt="" className="px-auto" />
        ))}
      </div>

    </footer>
  );
};

export default Footer;