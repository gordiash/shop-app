import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="Register">

            


            <form className="Register__Form">
            <div className="Register__Form__Header">
            <h3>Create Account</h3>

            </div>
            <div className="Register__Form__Field">
                    <label>First Name</label>
                <input type="text" />

                </div>
                <div className="Register__Form__Field">
                    <label>Last Name</label>
                <input type="text" />

                </div>

                <div className="Register__Form__Field">
                    <label>Email</label>
                <input type="email" />

                </div>
                <div className="Register__Form__Field">
                     <label>Password</label>
                <input type="password" />
                </div>
               

                <button type="submit">Create Account <i className="material-icons">send</i></button>

                <div className="Register__Form__Footer">
                    <Link to="/login">Or Sign in</Link>
                    
                </div>
            </form>
        </div>
    )
}
