import React from "react";

import "./featuredProducts.scss";
import Card from "../Card/Card";

export default function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/17474519/pexels-photo-17474519/free-photo-of-femme-modele-arbre-debout.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/15778296/pexels-photo-15778296/free-photo-of-mode-femme-jeans-sac.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sveele Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1469496/pexels-photo-1469496.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1441025/pexels-photo-1441025.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Skirt",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/908310/pexels-photo-908310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hat",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quia
          obcaecati veniam iure ea debitis dolor sapiente sunt vero eum?
          Reprehenderit accusamus molestiae officiis tempora praesentium quas?
          Eveniet deserunt exercitationem nostrum, nesciunt doloribus aut ex
          ipsum alias non est quas pariatur delectus odit!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
