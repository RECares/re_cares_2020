import React, { Component } from "react";
import "./StoryTile.css";

class StoryTile extends Component {
   render() {
      return (
         <div className="storyTile">
            <img src={this.props.imgURL} alt="Business man profile"/>
            <p>
               {this.props.text}
            </p>
         </div>
      );
   }
}

export default StoryTile;
