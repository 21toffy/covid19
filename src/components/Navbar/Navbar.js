import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import ReportForm from "./../Report/ReportForm";
import { Navbar,Nav } from 'react-bootstrap'


const BootstrapNavbar  = ({props}) => {

    return (
<Navbar collapseOnSelect className='new-nav'  expand="lg"  variant="light">
  <Navbar.Brand style={{color:"#008080"}} className="navbrand text-xl font-medium relative text-indigo-800 nuxt-link-active" ><Link to="/"style={{fontWeight:"bolder", color:"#00475c"}} className="nav-link  risk-checker">WearOff
        <sub data-v-5da7d0aa="" style={{color:"#437317"}} className="mb-2 text-yellow-600">Covid19</sub></Link>
  </Navbar.Brand>
        
  <Navbar.Toggle className="order-first" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features"><Link to="/" style={{color:"orangered", fontWeight:"bolder"}} className="nav-link" >DashBoard</Link></Nav.Link>
      
      <Nav.Link href="#pricing"><Link to="/" style={{fontWeight:"bolder", color:"#00475c"}}className="nav-link">Fact</Link></Nav.Link>

      <Nav.Link href="#pricing"><Link to="/risk-check"style={{fontWeight:"bolder", color:"#00475c"}} className="nav-link  risk-checker">Risk Checker</Link></Nav.Link>

      <Nav.Link href="#pricing"><Link to="/news-update" style={{fontWeight:"bolder", color:"#00475c"}}className="nav-link">News</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/news-update" style={{fontWeight:"bolder", color:"#00475c"}}className="nav-link">About</Link></Nav.Link>

   

      <Nav.Link href=""></Nav.Link>
    
    </Nav>

  </Navbar.Collapse>
  {/* <button onClick={handleShowModal}  className="navpillbutton">
                                Report a case
                            </button> */}
                            <ReportForm/>
  {/* {showModal && <ReportForm closeModal={handleCloseModal} />} */}
</Navbar>
);}






export default BootstrapNavbar ;
