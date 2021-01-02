import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
          <Link to={`${process.env.PUBLIC_URL}/`} className="navbar-brand" href="#">
            <b><h3>DOTA<font color="crimson">League</font></h3></b> 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={`${process.env.PUBLIC_URL}/`} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link" >
                  TEAMS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="schedule" className="nav-link" >
                  SCHEDULE
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="fa fa-user mr-2"></i> LOGIN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fa fa-search mr-2"></i>
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
    </>
  );
}

export default Navbar;
