import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header/header.js";
import Footer from "./components/layout/footer/Footer.js";
import Features from "./components/layout/Feature/Feature";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Privacy from "./components/Privacy/Privacy.jsx";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products.jsx";
import Search from "./components/layout/search/Search";
import LoginSignUp from "./components/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Privacy" element={<Privacy />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/login" element={<LoginSignUp />} />
        </Routes>
        <Features />
        <Footer />
      </Router>
    </>
  );
}

export default App;
