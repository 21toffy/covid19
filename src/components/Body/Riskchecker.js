import React from "react";
import "./Body.css";
import { Link } from 'react-router-dom';




export default function Riskchecker({ props }) {

    return(
        <div className="second-section">
<div className="row">
    <div className="contain col-sm-6 col-md-8 ">
    <img className="w-70" src={"https://i.pinimg.com/originals/ed/1a/70/ed1a707b12d96edc3e390d4ecc419b3a.jpg" } alt={"https://www.researchgate.net/profile/Ezra_Gayawan/publication/260023562/figure/fig1/AS:297066292105225@1447837531741/Map-of-Nigeria-showing-the-36-states-and-Federal-Capital-Territory-FCT-Abuja.png"} />
    </div>

    <div className="col-sm-6 col-md-4 ">
    <div className="card" style={{width:"18rem"}}>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Risk Checker</li>
        <li className="list-group-item"><h3>
        Check to ascertain your risk level and determine if you might need the helpline or not
            (Will take less than 2mins)
        </h3>
        </li>
            <button type="button" className="text-white ">
                    <Link to="/risk-check" className="pillbutton">  start </Link>  
            </button>
            </ul>   
    </div>
    
    </div>

</div>

</div>
       
        

        );
    }








