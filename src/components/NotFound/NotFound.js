
import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';


const NotFound = () => {
    return (
        <div className="page-wrap d-flex flex-row align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12 text-center">
        <span className="display-1 d-block">404</span>
        <div className="mb-4 lead">The page you are looking for was not found.</div>
        <Link to="/" style={{fontWeight:"bolder", color:"#00475c"}}className="nav-link">back to homepage</Link>
      </div>
    </div>
  </div>
</div>

    );
}
 
export default NotFound;