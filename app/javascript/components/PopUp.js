import React from "react";
//import { Link } from "react-router-dom";
import "./PopUp.css";
//import TweetImage from "./Common/TweetImage"
class PopUp extends React.Component {
    constructor(props) {
  super(props);

  //this.createTasks = this.createTasks.bind(this);
}
render() {
 
    return (
    <>
      <div className="PopUp">
        <div className= "PopUpText">
         {this.props.text}
        
        </div>
      </div>
    </>
    );
  }
};

export default PopUp;
