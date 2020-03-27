import React from "react";

export default function SectionAbout() {
  return (
    <div className="about-card">
      <div className="about-card__header">
        <img src={window.innerWidth <500 ? "https://picsum.photos/400" : "https://picsum.photos/1200"} alt="some" />
      </div>
      <div className="about-card__body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit
          quibusdam illo quam? Laborum, ad sunt. Voluptate ex id natus possimus
          neque laboriosam, quod unde quidem quasi eveniet error fugit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quo sit quibusdam
          illo quam?
        </p>
        <p>
          Laborum, ad sunt. Voluptate ex id natus possimus neque laboriosam,
          quod unde quidem quasi eveniet error fugit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo sit quibusdam illo quam? Laborum, ad
          sunt. Voluptate ex id natus possimus neque laboriosam, quod unde
          quidem quasi eveniet error fugit.
        </p>
      </div>
    </div>
  );
}
