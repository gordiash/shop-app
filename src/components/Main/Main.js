import React from "react";
import Banner from "./Banner";
import ItemCard from "../ItemCard.js/ItemCard";

export default function Main() {
  return (
    <React.Fragment>
      <Banner />

      <div className="Main">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </React.Fragment>
  );
}
