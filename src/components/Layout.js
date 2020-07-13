import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
export default function Layout({ children }) {
  return (
    <div>
        <Navbar />
        <div style={{marginBottom:"50px"}}></div>
    	
        {children}
        
    </div>
  );
}
