import React from "react";
import prod1 from "../../images/product-images/001.jpg";
import prod2 from "../../images/product-images/002.jpg";
import prod3 from "../../images/product-images/003.jpg";
import prod4 from "../../images/product-images/004.jpg";
import prod5 from "../../images/product-images/005.jpg";
import prod6 from "../../images/product-images/006.jpg";
import prod7 from "../../images/product-images/007.jpg";
import prod8 from "../../images/product-images/008.jpg";
import prod9 from "../../images/product-images/009.jpg";
import prod10 from "../../images/product-images/010.jpg";
import prod11 from "../../images/product-images/011.jpg";
import prod12 from "../../images/product-images/012.jpg";
import "./styles.scss";

const images = [
  prod1,
  prod2,
  prod7,
  prod3,
  prod4,
  prod5,
  prod6,
  prod8,
  prod9,
  prod11,
  prod12,
  prod10,
];

const Products = () => (
  <div className="grid">
    {images.map((p, i) => (
      <div key={i}>
        <img className="grid-image" alt="" src={p} />
      </div>
    ))}
  </div>
);

export default Products;
