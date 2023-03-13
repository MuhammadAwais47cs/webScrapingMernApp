import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import flage from "../../Images/1200px-Flag_of_Pakistan.svg.webp";
function Header() {
  return (
    <>
      <div class="top-header">
        <div class="left">
          <img src={flage} alt="" />
          <select>
            <option class="opt" value="PAK">
              PAK
            </option>
            <option class="opt" value="USA">
              USA
            </option>
            <option class="opt" value="IND">
              IND
            </option>
          </select>
          <p>+777777646734</p>
        </div>
        <div class="right">
          <a href="#">My Account</a>
          <a href="#">Wish List</a>
          <a href="#">Shopping</a>
          <a href="#">Cart</a>
          <a href="#">Checkout</a>
        </div>
      </div>
      <div class="main-header-section mt-4 " id="header">
        <div class="left">
          <h1>Logo</h1>
        </div>
        <div class="center">
          <form action="#" class="search-product">
            <input type="Search" name="search" placeholder="Search Products" />
            <div class="search-icon">
              <i class="fas fa-search"></i>
            </div>
          </form>
        </div>
        <div class="right d-flex flex-row-reverse ">
          <Link to="/login">
            <button class="sign-btn  ">Sign In</button>
          </Link>
        </div>
      </div>
      <div class="main-header-section mt-3 shadow" id="header">
        <div class="left">
          <h4>All Category</h4>
        </div>
        <div class="center">
          <a href="/">Home</a>
          <a href="/">Category</a>
          <div class="dropdown">
            <Link to="/products" class="latest" onclick="DropDown()">
              Products <i class="fas fa-angle-down"></i>
            </Link>
            <div id="myDropdown" class="dropdown-content">
              <a href="#">Link1</a>
              <a href="#">Link2</a>
              <a href="#">Link3</a>
              <a href="#">Link4</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="#" class="latest" onclick="DropDown()">
              Blog <i class="fas fa-angle-down"></i>
            </a>
            <div id="myDropdown" class="dropdown-content">
              <a href="#">Link1</a>
              <a href="#">Link2</a>
              <a href="#">Link3</a>
              <a href="#">Link4</a>
            </div>
          </div>
          <a href="#">Pages</a>
          <a href="#">Contact</a>
        </div>
        <div class="right"></div>
      </div>
    </>
  );
}

export default Header;
