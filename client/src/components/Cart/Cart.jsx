import React from "react";
import "./cart.scss";
import { Delete, DeleteOutline } from "@mui/icons-material";

export default function Cart() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/17474519/pexels-photo-17474519/free-photo-of-femme-modele-arbre-debout.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/15778296/pexels-photo-15778296/free-photo-of-mode-femme-jeans-sac.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sveele Graphic T-Shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed doloribus officia eveniet numquam, et esse similique in voluptates voluptas assumenda at cum nostrum quibusdam labore tempora eius a dignissimos!",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed doloribus officia eveniet numquam, et esse similique in voluptates voluptas assumenda at cum nostrum quibusdam labore tempora eius a dignissimos!",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="cart">
      <h1>Product in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 30)}...</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutline className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKUP</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}
