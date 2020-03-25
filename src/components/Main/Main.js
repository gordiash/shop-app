import React from "react";
import Banner from "./Banner";
import ItemCard from "../ItemCard.js/ItemCard";
import Sugestions from "../../components/Sugestions/Sugestions";
import Subscription from "../../components/Subscription/Subscription";
import SectionAbout from "../../components/About/SectionAbout";

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

      <section className="section-subscription">
        <Subscription />
      </section>
      <section className="section-about">
        <div className="section-about__title">
          <h2>About</h2>
        </div>
        <SectionAbout />
      </section>
      <section className="section-sugestions">
        <div className="section-sugestions__title">
          <h2>Sugestions</h2>
        </div>
        <Sugestions />
      </section>

      <section className="section-subscription">
        <Subscription />
      </section>
    </React.Fragment>
  );
}
