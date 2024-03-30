import React, { useState } from "react";
import "./product.scss";
import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";

export default function Product() {
  const images = [
    "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15778296/pexels-photo-15778296/free-photo-of-mode-femme-jeans-sac.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          eaque odit accusantium itaque et dolore voluptate facere quam. Vero
          recusandae nulla consequatur mollitia esse aut, reprehenderit aliquid
          quod veritatis et?
        </p>
        <div className="quantity">
          <button
            onClick={(e) => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={(e) => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder /> ADD TO WISH LIST
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}
