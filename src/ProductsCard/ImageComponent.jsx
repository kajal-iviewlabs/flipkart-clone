import React from "react";
import "./ImageComponent.css";

const ImageComponent = () => {
  return (
    <div
      className="zlQd20"
      style={{
        "--aspect-ratio": "139/12",
        "--aspect-ratio-m": "139/12",
        "--aspect-ratio-l": "139/12",
        flex: 1,
        resizeMode: "cover",
        progressive: true,
      }}
    >
      <picture>
        <source
          srcSet="https://rukminim2.flixcart.com/fk-p-flap/1600/140/image/cecebca2292c7948.jpg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/3200/280/image/cecebca2292c7948.jpg?q=60 2x"
          media="(min-width: 119.2rem)"
        />
        <source
          srcSet="https://rukminim2.flixcart.com/fk-p-flap/1000/90/image/cecebca2292c7948.jpg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/2000/180/image/cecebca2292c7948.jpg?q=60 2x"
          media="(min-width: 76.8rem) and (max-width: 119.1rem)"
        />
        <img
          style={{
            width: "100%",
            margin: "auto",
            display: "block",
            objectFit: "cover",
            opacity: 1,
            aspectRatio: "139 / 12",
          }}
          loading="auto"
          alt="Image"
          srcSet="https://rukminim2.flixcart.com/fk-p-flap/480/40/image/cecebca2292c7948.jpg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/960/80/image/cecebca2292c7948.jpg?q=60 2x"
          src="https://rukminim2.flixcart.com/fk-p-flap/480/40/image/cecebca2292c7948.jpg?q=90"
        />
      </picture>
    </div>
  );
};

export default ImageComponent;
