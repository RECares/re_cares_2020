import React from 'react';
import Tile from "./Tile";
import { Link } from "react-router-dom";
import "./TileDisplay.css";

// To use this class an array of the following Module class is expected

// class Module {
//   constructor(imageKey, path) {
//     this.imageKey = imageKey;
//     this.path = path;
//   }
// }

//Ex. component call <TileDisplay modules={[module1,module2,module3,module4]}/>

class TileDisplay extends React.Component {
   constructor(props) {
      super(props);
   }

   createModules(moduleItem) {
      return (
      <Link className="moduleItem" key={moduleItem.imageKey + 1} to={moduleItem.path}>
         <span className="moduleSpan" > 
            <Tile imgKey={moduleItem.imageKey} key={moduleItem.imageKey}/> 
         </span> 
      </Link>
      )
  }

   render() {
     var moduleEntries = this.props.modules;
     var listModules = moduleEntries.map(this.createModules);

     return (
         <div className="moduleRow">
            {listModules}
         </div>
      )
   }
}

export default TileDisplay;
