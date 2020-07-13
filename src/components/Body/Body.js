
import React from "react";
import "./Body.css";


import Information from "./Information";
import Riskchecker from "./Riskchecker";

import FirstSection from "./FirstSection";




export default function Body({ props }) {
    
    return (
        
        
        <div className="body">
        <FirstSection/>
        <Riskchecker/>
        <Information/>
        
</div>
  );
}



