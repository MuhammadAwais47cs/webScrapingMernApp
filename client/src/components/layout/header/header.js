import React, { useState , useEffect } from 'react'
import logo from '../assets/logo.png'
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
          icon: "cui-dollar",
          children: [
            {
              name: "Apple",
              // url: "/OverviewMoneyOut",
              // icon: "cui-bookmark",
            },
            {
              name: " Infinix",
              // url: "/WhatType",
              // icon: "cui-pencil",
            },
            
            {
              name: " Itel",
              // url: "/Mileage",
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
            {
              name: "More Brands",
              // url: "/OverviewInvoice33",
              // icon: "cui-graph",
              // attributes: { disabled: true },
            },
            
          ],
        },
        {
          name: "Tablets",
          // icon: "cui-dollar",
          children: [
            {
              name: "Apple ",
              // url: "/OverviewMoneyOut",
              // icon: "cui-bookmark",
            },
            {
              name: "Dany ",
              // url: "/WhatType",
              // icon: "cui-pencil",
            },
            
            {
              name: "Huawei ",
              // url: "/Mileage",
              // icon: "cui-pencil",
            },
            {
              name: "Samsung ",
              // url: "/CreateSubsistence",
              // icon: "cui-pencil",
            },
            {
              name: "More Brandsrview",
              // url: "/CreatePurchaseCreditNote",
              // icon: "cui-credit-card",
            },
    
          
          ],
        },
        {
          name: "Smart Watches",
          icon: "cui-dollar",
          children: [
            {
              name: "Apple ",
              url: "/OverviewMoneyOut",
              icon: "cui-bookmark",
            },
            {
              name: " Huawei ",
              url: "/WhatType",
              icon: "cui-pencil",
            },
            
            {
              name: " Samsung",
              url: "/Mileage",
              icon: "cui-pencil",
            },
            {
              name: "Xiaomi",
              url: "/CreateSubsistence",
              icon: "cui-pencil",
            },
            {
              name: "More Brands",
              url: "/CreatePurchaseCreditNote",
              icon: "cui-credit-card",
            },
      
          ],
        },
        {
          name: "Wireless Earbuds",
          icon: "cui-dollar",
          children: [
            {
              name: "Anker",
              url: "/OverviewMoneyOut",
              icon: "cui-bookmark",
            },
            {
              name: "Baseus",
              url: "/WhatType",
              icon: "cui-pencil",
            },
            
            {
              name: "Ronin ",
              url: "/Mileage",
              icon: "cui-pencil",
            },
            {
              name: "Xiaomi ",
              url: "/CreateSubsistence",
              icon: "cui-pencil",
            },
            {
              name: "More Brands",
              url: "/CreatePurchaseCreditNote",
              icon: "cui-credit-card",
            },
    
            
          ],
        },
        {
          name: "Mobiles Accessories",
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
            {
              name: "More Brands",
              url: "/CreatePurchaseCreditNote",
              icon: "cui-credit-card",
            },
      
          ],
        },
        {
          name: "TV & Home Appliances",
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
        {
          name: "Motorcycle",
          icon: "cui-dollar",
          children: [
            {
              name: "Honda",
              url: "/OverviewMoneyOut",
              icon: "cui-bookmark",
            },
            {
              name: "Union Star",
              url: "/WhatType",
              icon: "cui-pencil",
            },
            
            {
              name: "Unique",
              url: "/Mileage",
              icon: "cui-pencil",
            },
            {
              name: "Yamaha",
              url: "/CreateSubsistence",
              icon: "cui-pencil",
            },
            {
              name: "More Brands",
              url: "/CreatePurchaseCreditNote",
              icon: "cui-credit-card",
            },
    
            
          ],
        },
      ]
     const searchToggle = ()=> {
      setOpenModel(!openModel)
     }
     useEffect(()=>{
      
      if (cat)   navigate(`/products/${cat}`);
     
    } , [ cat ]);
    return (
        <>
       
        <nav className="navbar navbar-expand-sm bg-danger text-white  fixed-top">
        <div className="container-fluid ">
        <button className="navbar-toggler" type="button"
         data-bs-toggle="collapse" 
         data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
           aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
          
         
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mx-auto justify-content-center flex-grow-1 pe-3">
               
                
             {catogary.map(({name,children})=>(
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
              {children.map(({name})=>(
                <li><p className="dropdown-item" onClick={()=>setCat(name)} key={name}  >{name}</p></li>
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
