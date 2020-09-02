import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBarLoggedIn extends React.Component {
    render() {
        return (
            <div className="nav-bar">
               <div className="nav-logo">
                  <div className="nav-logo1">
                     Best
                  </div>
                  <div className="nav-logo2">
                     Practices
                  </div>
               </div>

               <div>
                  <Link to="/SignOut" className="routingButton" role="button"> 
                     <div> Sign Out </div>
                  </Link>
                  <div className="routingButton"> | </div>
                  <Link to="/Profile" className="routingButton" role="button"> 
                     <div> Profile </div>
                  </Link>
                  <div className="routingButton"> | </div>
                  <Link to="/Resources" className="routingButton" role="button"> 
                     <div> Resources </div>
                  </Link>
                  <div className="routingButton"> | </div>
                  <Link to="/AboutUS" className="routingButton" role="button"> 
                     <div> About US </div>
                  </Link>
                  <div className="routingButton"> | </div>
                  <Link to="/Home" className="routingButton" role="button"> 
                     <div> Home </div>
                  </Link>
  		      	 </div>
            </div>
        )
    }
}

export default NavBarLoggedIn;