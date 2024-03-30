import React, { useState } from "react";
import {
  KeyboardArrowDown,
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import En from "../../img/en.png";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/Cart";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={En} alt="" />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Woman
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Children
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Men
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            LEBOSTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon" onClick={(e) => setOpen(!open)}>
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}
