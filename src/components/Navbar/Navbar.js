import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import ReportForm from "./../Report/ReportForm";
import ReactDOM from 'react-dom';



const Navbar = ({props}) => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal =()=>{
        setShowModal(true);
    }


    const handleCloseModal =()=>{
        setShowModal(false);
    }

    return (
<div>
    
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
                   
                    {/* <ToggleContent
                        toggle={show => <button class="pillbutton" onClick={show}>Report a case</button>}
                        content={hide => (
                            <div>
                                <ReportForm/>
                            <button onClick={hide}>Close</button>
                            </div>
                        )}
                        /> */}
                        
                            <button onClick={handleShowModal}  class="pillbutton">
                                Report a case
                            </button>
                        
             </div></Link></li>
                </ul>
            </div>
        </nav>    
                            {showModal && <ReportForm closeModal={handleCloseModal} />}
</div>     

);}






export default Navbar;
