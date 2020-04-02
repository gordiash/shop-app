import React from "react";

export default function Contact() {
  return (
    <div className="Contact">
      <form className="Contact__Form">
        <div className="Contact__Form__Header">
          <h3>Contact Us</h3>
        </div>
        <div className="Contact__Form__Field">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className="Contact__Form__Field">
          <label>Last Name</label>
          <input type="text" />
        </div>

        <div className="Contact__Form__Field">
          <label>Phone</label>
          <input type="phone" />
        </div>

        <div className="Contact__Form__Field">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="Contact__Form__Field">
          <label>Message</label>
          <textarea placeholder="Write a message..." rows="5"/>
        </div>

        <button type="submit">
          Send Message <i className="material-icons">send</i>
        </button>
      </form>
    </div>
  );
}
