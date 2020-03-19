import React from "react";

export default function Subscription() {
  return (
    <div className="subscription-widget">
      <div className="subscription-widget__header">
        <h3 className="subscription-widget__title">10% off</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          consequatur harum
        </p>
      </div>
      <div className="subscription-widget__form">
        <input type="email" placeholder="Get updates, leave your email"></input>
        <button type="submit">
            <i className="material-icons">send</i>
        </button>
        
      </div>
    </div>
  );
}
