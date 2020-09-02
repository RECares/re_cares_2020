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
         Computer - Is your information stored only on your computer. External Hard Drive - If your information is stored on a USB or external hardrive. Online - If your information is stored online and accessible from different computers. Physical Copies - If your information is accessible with physical copies, ex printed out 
        </div>
        </div>
    </>
    );
  }
};

export default PopUp;