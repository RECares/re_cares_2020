import React from 'react';
import Images from './ImageList';
import '../../assets/stylesheets/Tile.css';

// To use this component, pass in the appropriate imgKey for which tile you are wanting
// All of the images and their keys are in the ImageList.js file
// Example: if you wanted to use the Data Storage tile, pass in imgKey="DataStorage"

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const image = Images.filter((img) => {
            if (img.key === this.props.imgKey) {
                return img;
            }
        });

        const imageSrc = image[0].src;
        const imageTitle = image[0].title;
        
        return (
            <div className="Tile">
                <img src={imageSrc} className="Icon" height="70" width="70"/>
                <div className="Title">
                    {imageTitle}
                </div>
            </div>
        )
    }
}

export default Tile;