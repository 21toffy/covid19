import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import RepertForm from "./Report/RepertForm";
import React, { useState, useEffect }
import { Link } from 'react-router-dom';


const Navbar = ({children}) => {
    const [popup, setPopup] = useState([show:false]);


    const showPopUp = e => {
        e.preventDefault();
        
        setPopup!this.state.showPopup  ;
      };    

    return (

        <nav className=" navbar navbar-light py-0  bg- navbar-expand-lg py-md-0 relative"data-v-5da7d0aa="" data-v-83937a64="">
            <div data-v-5da7d0aa="" class="flex items-center h-16 mb-6 mr-3"><a data-v-5da7d0aa="" href="/" class="text-xl font-medium relative text-indigo-800 nuxt-link-active">
                 KnowCOVID19.
        <sub data-v-5da7d0aa="" class="mb-2 text-yellow-600">ng</sub></a>         </div>
            <button className="navbar-toggler mt-1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
            <div className="navbar-collapse justify-content-center link-color collapse" id="navbarNav">
                <ul className="navbar-nav link-color ">
                <li className="nav-item py-0 nav-link"><Link to="/" className="nav-link" >DashBoard</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/news-update" className="nav-link">News</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/" className="nav-link">Fact</Link></li>
                    <li className="nav-item py-0 nav-link" style={{color:"orangered"}}><Link to="/risk-check" style={{color:"orangered"}}className="nav-link  risk-checker">Risk Checker</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/" className="nav-link">Support Us</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/" className="nav-link">About</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/" className="nav-link"><div  class="nav-group flex social">
                         <button  class="pillbutton">
                             Report a case
                         </button>
             </div></Link></li>
                </ul>
            </div>
        </nav>
        

);}




//         <nav data-v-5da7d0aa="" data-v-83937a64="" class="relative">
//             <div data-v-5da7d0aa="" class="flex items-center">
//             <div data-v-5da7d0aa="" class="flex items-center md:hidden">
                
//                 </div> 
//                 <div data-v-5da7d0aa="" class="flex items-center h-16 mb-6 mr-3"><a data-v-5da7d0aa="" href="/" class="text-xl font-medium relative text-indigo-800 nuxt-link-active">
//                 KnowCOVID19.
//         <sub data-v-5da7d0aa="" class="mb-2 text-yellow-600">ng</sub></a> 
//        </div>
//                     </div> 
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
//     <span class="navbar-toggler-icon"></span>
//   </button>
                        
//                         <div class="collapse navbar-collapse" id="collapsibleNavbar">
//                         <ul class="navbar-nav">
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Link</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Link</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Link</a>
//                         </li>
//                         </ul>
//                     </div>
                            {/* <a data-v-5da7d0aa="" href="/" class="nuxt-link-active other-nav-links">Dashboard</a> 

                            <a data-v-5da7d0aa="" href="/news_updates" class="other-nav-links">News</a> <a data-v-5da7d0aa="" href="/facts" class="other-nav-links">Facts</a>
                            <a data-v-5da7d0aa="" href="/risk-check" class="active-link nuxt-link-active risk-checker">Risk Checker</a> 
                            <a data-v-5da7d0aa="" href="/funding" class="other-nav-links" target="_blank">Support us</a> 
                            <a data-v-5da7d0aa="" href="/about" class="other-nav-links">About</a> */}


        //                     <div data-v-5da7d0aa="" class="nav-group flex social">
        //                 <button  class="mybutton">
        //                     Report a case
        //                 </button>
        //     </div> <aside data-v-5da7d0aa="" class="">
        //          </aside>
        // </nav>


export default Navbar;
