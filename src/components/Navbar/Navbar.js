import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (

        <nav className=" navbar navbar-light py-0  bg- navbar-expand-lg py-md-0 ">
            <a className="navbar-brand" href="#">Bootstrap 4</a>
            <button className="navbar-toggler mt-1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
            <div className="navbar-collapse justify-content-center link-color collapse" id="navbarNav">
                <ul className="navbar-nav link-color ">
                <li className="nav-item py-0 nav-link"><Link to="/">DashBoard</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/">News</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/">Fact</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/">Risk Checker</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/">Support Us</Link></li>
                    <li className="nav-item py-0 nav-link"><Link to="/">About</Link></li>
                </ul>
            </div>
        </nav>
    );}


export default Navbar;
