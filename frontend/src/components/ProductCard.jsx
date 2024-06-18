import React from "react";
import imageNotFound from "../assets/imageNotFound.png"

const ProductCard = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageNotFound} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold text-center">{item.name}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
