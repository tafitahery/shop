import React from "react";

import "./footer.scss";
import Pay from "../../img/payment.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            eligendi. Eius earum nobis eligendi magni aspernatur, blanditiis
            aliquam eos, unde ratione dolorem mollitia consequatur fuga neque
            optio nostrum, id quibusdam.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            eligendi. Eius earum nobis eligendi magni aspernatur, blanditiis
            aliquam eos, unde ratione dolorem mollitia consequatur fuga neque
            optio nostrum, id quibusdam.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">lebostore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src={Pay} alt="" />
        </div>
      </div>
    </div>
  );
}
