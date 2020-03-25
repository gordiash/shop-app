import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__Menu">
        <Link className="Footer__Menu-item">Home</Link>
        <Link className="Footer__Menu-item">About</Link>
        <Link className="Footer__Menu-item">Shop</Link>
        <Link className="Footer__Menu-item">Contact</Link>
      </div>
      <div className="Footer__Social">
        <Link className="Footer__Menu-item">Facebook</Link>
        <Link className="Footer__Menu-item">Twitter</Link>
        <Link className="Footer__Menu-item">Instagram</Link>
      </div>
    </div>
  );
}
