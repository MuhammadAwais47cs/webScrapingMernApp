import React, { useState , useEffect } from 'react'
import logo from '../assets/2.png'
import { FaSearch, FaPowerOff } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import  Search  from '../search/Search';
function Header() {
  const navigate = useNavigate();
  const [openModel, setOpenModel] = useState(false) 
   
    const [cat, setCat] = useState(false) 
      const catogary = [  
        {
          name: "Mobiles",
          value: "Mobiles",
          icon: "cui-dollar",
          children: [
            {
              name: "Apple",
              // url: "/OverviewMoneyOut",
              // icon: "cui-bookmark",
            },
            {
              name: "Infinix",
              // url: "/WhatType",
              // icon: "cui-pencil",
            },
            
            
            {
              name: "Nokia",
              // url: "/CreateSubsistence",
              // icon: "cui-pencil",
            },
            {
              name: "Oppo",
              // url: "/CreatePurchaseCreditNote",
              // icon: "cui-credit-card",
            },
    
            {
              name: "Realme ",
              // url: "/PurchaseRefundOverview",
              // icon: "cui-file",
            },
    
            
            {
              name: "Samsung",
              // url: "/OverviewInvoice33",
              // icon: "cui-envelope-open",
              // attributes: { disabled: true },
            },
            {
              name: "Vivo",
              // url: "/OverviewInvoice33",
              // icon: "cui-graph",
              // attributes: { disabled: true },
            },
            {
              name: "Xiaomi",
              // url: "/OverviewInvoice33",
              // icon: "cui-graph",
              // attributes: { disabled: true },
            },
           
            
          ],
        },
        {
          name: "Tablets",
          value: "Tablets",
          // icon: "cui-dollar",
          children: [
            {
              name: "Apple ",
              // url: "/OverviewMoneyOut",
              // icon: "cui-bookmark",
            },
            {
              name: "Dany",
              // url: "/WhatType",
              // icon: "cui-pencil",
            },
            
            {
              name: "Huawei",
              // url: "/Mileage",
              // icon: "cui-pencil",
            },
            {
              name: "Samsung",
              // url: "/CreateSubsistence",
              // icon: "cui-pencil",
            },
            
    
          
          ],
        },
        {
          name: "Smart Watches",
          value: "Smart-Watches",
          icon: "cui-dollar",
          children: [
            {
              name: "Apple",
              url: "/OverviewMoneyOut",
              icon: "cui-bookmark",
            },
            {
              name: "Huawei",
              url: "/WhatType",
              icon: "cui-pencil",
            },
            
            {
              name: "Samsung",
              url: "/Mileage",
              icon: "cui-pencil",
            },
            {
              name: "Xiaomi",
              url: "/CreateSubsistence",
              icon: "cui-pencil",
            },
             
      
          ],
        },
        {
          name: "Wireless Earbuds",
          value: "Wireless-Earbuds",
          icon: "cui-dollar",
          children: [
            {
              name: "Apple",
              url: "/OverviewMoneyOut",
              icon: "cui-bookmark",
            },
            {
              name: "Realme",
              url: "/WhatType",
              icon: "cui-pencil",
            },
            
            {
              name: "Audionic",
              url: "/Mileage",
              icon: "cui-pencil",
            },
            {
              name: "Infinix",
              url: "/CreateSubsistence",
              icon: "cui-pencil",
            },
            
    
            
          ],
        },
        {
          name: "Mobiles Accessories",
          value: "Mobiles-Accessories",
          icon: "cui-dollar",
          children: [
            {
              name: "Mobiles Accessories",
              url: "/OverviewMoneyOut",
              icon: "cui-bookmark",
            },
            {
              name: "Charging Cables",
              url: "/WhatType",
              icon: "cui-pencil",
            },
            
            {
              name: "Wireless Chargers",
              url: "/Mileage",
              icon: "cui-pencil",
            },
            {
              name: "Wall Chargers",
              url: "/CreateSubsistence",
              icon: "cui-pencil",
            },
            {
              name: "Car Chargers",
              url: "/CreatePurchaseCreditNote",
              icon: "cui-credit-card",
            },
    
            {
              name: "Power Banks",
              url: "/PurchaseRefundOverview",
              icon: "cui-file",
            },
    
            
            {
              name: "Bluetooth Speakers",
              url: "/OverviewInvoice33",
              icon: "cui-envelope-open",
              attributes: { disabled: true },
            },
           
          ],
        },
        {
          name: "Laptops",
          value: "Laptops",
          icon: "cui-dollar",
          children: [
            {
              name: "Apple",
              url: "/OverviewMoneyOut",
              icon: "cui-bookmark",
            },
            {
              name: "Dell",
              url: "/WhatType",
              icon: "cui-pencil",
            },
            
            {
              name: "Hp",
              url: "/Mileage",
              icon: "cui-pencil",
            },
            {
              name: "Lenovo",
              url: "/CreateSubsistence",
              icon: "cui-pencil",
            },
          
      
          ],
        },
        {
          name: "TV & Home Appliances",
          value: "TV&Home-Appliances",
          icon: "cui-dollar",
          children: [
            {
              name: "Led-Tv ",
              url: "/OverviewMoneyOut",
              icon: "cui-bookmark",
            },
            {
              name: "AC",
              url: "/WhatType",
              icon: "cui-pencil",
            },
            
            {
              name: "Fridge",
              url: "/Mileage",
              icon: "cui-pencil",
            },
           
          ],
        },
        
      ]
     const searchToggle = ()=> {
      setOpenModel(!openModel)
     }
     useEffect(()=>{
      
      // if (cat)   navigate(`/products/${cat}`, { state:  });
     
    } , [ cat ]);
    return (
        <>
       
        <nav className="navbar navbar-expand-lg bg-danger text-white  fixed-top">
        <div className="container-fluid ">
        <a class="navbar-brand" href="/" >
        <img src={logo} alt="Bootstrap" width="180vmax" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          
         
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mx-auto justify-content-center flex-grow-1 pe-3">
             {catogary.map(({name,value,children})=>(
              <>
              <li className="nav-item dropdown ms-3" key={name}>
              <a
                className="nav-link dropdown-toggle text-white"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                key={name}
              >
                 {name}
              </a>
              <ul className="dropdown-menu">
              {children.map(({name: childrenName})=>(
                <li><p className="dropdown-item" onClick={()=> navigate(`/products/${childrenName}`, { state:{ category: value }})} key={childrenName}  >{childrenName}</p></li>
             ))}
              </ul>
            </li>
            </>
          ))}
              </ul>
             
            </div>
            </div>
           {/* <form className="d-flex mt-2 flex-end " role="search">
            <input
              className="form-control me-2 px-5 rounded-pill "
              type="search"
              placeholder="Search . . ."
              aria-label="Search"
            />
              </form>
              onClick={()=>searchToggle()}
            */}
            <button type="button" className="btn text-white "   data-bs-toggle="modal" data-bs-target="#exampleModal"  >
            <a href="/search" className='text-white'>
            <FaSearch/>
            </a> 
            </button>
            <button className="btn  text-white" type="submit">
            <FaPowerOff/>
          </button>
        
      </nav>
      {openModel && <Search/>}
        </>
    )
}

export default Header
