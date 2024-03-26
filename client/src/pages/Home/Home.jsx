import React from "react";
import Slider from "../../components/Slider/Slider";
import "./home.scss";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProducts";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
}
