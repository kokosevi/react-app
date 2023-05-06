import React from "react";

const ImageComponent = ({ imageUrl, altText }) => (
  <div
    className="image-container"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "70vh",
      width: "100%",
      // border: "2px solid #333",
      boxSizing: "border-box",
      position: "relative",
    }}
  >
    <img
      src={imageUrl}
      alt={altText}
      style={{
        height: "100%",
        objectFit: "contain",
      }}
      useMap="#image-map"
    />
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
