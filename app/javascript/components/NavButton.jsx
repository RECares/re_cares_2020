import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./NavButton.css";

class NavButton extends Component {
   render() {
      return (
         <BrowserRouter>
            <Link
               to={this.props.route}
               className="routingButton"
               role="button"
            >
               <p>
                  {this.props.text}
               </p>
            </Link>
         </BrowserRouter>
      );
   }
}

export default NavButton;
