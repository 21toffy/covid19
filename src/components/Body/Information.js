import React from "react";
import "./Body.css";
import Hotline from "./Hotline";
import KnowledgeBox from "./KnowledgeBox";





export default function Information({ props }) {

    return(

        <div className="second-section2">

            <div className= "row stats-container">

                <div className= "col-md-6 individual-card3">
                    <KnowledgeBox/>
                </div>
                <div className= "col-md-6 individual-card3">
                    <Hotline/>
                </div>


            </div>
        </div>
        

        );
    }

