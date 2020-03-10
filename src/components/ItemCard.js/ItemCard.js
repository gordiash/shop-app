import React from "react";

export default function ItemCard(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img src="https://picsum.photos/200" alt="some" />
      </div>

      <div className="card-body">
        <h4>Product name</h4>

        <div className="card-body-info">
          <div className="card-body-price">$5.99</div>
          <button>
            <i className="material-icons">add_shopping_cart</i>
          </button>
        </div>
      </div>
    </div>
  );
}
