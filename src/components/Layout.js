import React from "react";
import BootstrapNavbar  from "./Navbar/Navbar";
import Footer  from "./Footer/Footer";


export default function Layout({ children }) {

  return (
    <div>
        <BootstrapNavbar  />
        {children}
        {/* <ReportForm/> */}
        <Footer/>
        
    </div>
  );
}
