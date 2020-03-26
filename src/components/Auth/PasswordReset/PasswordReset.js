import React from "react";
import { Link } from "react-router-dom";

export default function PasswordReset() {
  return (
    <div className="Reset">
      <form className="Reset__Form">
        <div className="Reset__Form__Header">
          <h3>Reset your password</h3>
        </div>

        <div className="Reset__Form__Field">
          <label>Email</label>
          <input type="email" />
        </div>

        <button type="submit">
          Reset Password <i className="material-icons">asend</i>
        </button>

        <div className="Reset__Form__Footer">
          <Link to="/login">Back to Sign in</Link>
        </div>
      </form>
    </div>
  );
}
