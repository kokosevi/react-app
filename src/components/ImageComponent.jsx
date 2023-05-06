import React from "react";

const ImageComponent = ({ imageUrl, altText }) => (
  <div className="image-container">
    <img src={imageUrl} alt={altText} useMap="#image-map" />
    <map name="image-map">
      <area shape="circle" coords="200,200,50" href="/page1" alt="Click me!" />
      <area
        shape="rect"
        coords="300,300,500,500"
        href="/page2"
        alt="Click me too!"
      />
      <area
        shape="poly" // Add a poly shape for custom clickable areas
        coords="100,200,150,300,50,300"
        href="/page3"
        alt="Click me three!"
      />
    </map>
  </div>
);

export default ImageComponent;
