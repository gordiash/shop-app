import React from 'react'
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className="Login">

            


            <form className="Login__Form">
            <div className="Login__Form__Header">
            <h3>Sign in</h3>

            </div>

                <div className="Login__Form__Field">
                    <label>Email</label>
                <input type="email" />

                </div>
                <div className="Login__Form__Field">
                     <label>Password</label>
                <input type="password" />
                </div>
               

                <button type="submit">Sign in <i className="material-icons">asend</i></button>

                <div className="Login__Form__Footer">
                    <Link to="/reset-password">Forgot password?</Link>
                    <Link to="/register">Register an account</Link>
                </div>
            </form>
        </div>
    )
}
