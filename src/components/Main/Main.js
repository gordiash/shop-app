import React from "react";
import Banner from "./Banner";
import ItemCard from "../ItemCard.js/ItemCard";

export default function Main() {
  return (
    <React.Fragment>
      <Banner />

      <div className="Main">
    <h3 className="Main-title">Most popular products:</h3>

      {window.innerWidth < 600
      ?
      <React.Fragment>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        </React.Fragment>
        :
        <React.Fragment>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        </React.Fragment>
      }
        
      </div>
    </React.Fragment>
  );
}
