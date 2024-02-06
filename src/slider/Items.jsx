import React from "react";
import { featureProductData } from "./featureProductData";
import "./Items.css";

const Items = () => {
  return (
    <div className="item_list">
      {featureProductData.map((product) => (
        <div key={product.id} className="featureProduct_list">
          <div className="featureProduct_item">
            <a href={product.link} className="linktag">
              <div className="featureProduct_img">
                <img alt={product.name} src={product.img} />
                <p className="featureProduct_name">{product.name}</p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
