import React from "react";
//import { Link } from "react-router-dom";
import "./checklist.css";
//import TweetImage from "./Common/TweetImage"
class checklist extends React.Component {
    constructor(props) {
  super(props);

  //this.createTasks = this.createTasks.bind(this);
}
render() {
 
    return (
    <>
      <div className="checklist">
         <div className="task">
           <div className="tasktext">
           </div>
             <div className="taskCheckBox">
            </div>
      </div>
      </div>
      
    </>
    );
  }
};

export default checklist;