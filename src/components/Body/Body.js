
import React from "react";
import "./Body.css";

import Layout from './../Layout.js'

import Information from "./Information";
// import Riskchecker from "./Riskchecker";

import FirstSection from "./FirstSection";




export default function Body({ props }) {
    
    return (
        
        
       <Layout>
          <div className="body">
            <FirstSection/>
            {/* <Riskchecker/> */}
            <Information/>
          </div>
       </Layout>
  );
}



