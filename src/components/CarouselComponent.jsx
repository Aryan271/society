import React from "react";
import banner from "../assets/banner.jpg";

export default function CarouselComponent() {
  return (
    <div className="relative">
      <img src={banner} alt="banner" />
      <h1 className="absolute text-3xl text-white top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
        The Biotech Research Society, NITW
      </h1>
    </div>
  );
}
