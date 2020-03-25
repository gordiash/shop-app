import React from 'react'

export default function Login() {
    return (
        <div className="Login">

            


            <form className="Login__Form">
            <h3>Sign in</h3>

                <div className="Login__Form__Field">
                    <label>Email</label>
                <input type="email" />

                </div>
                <div className="Login__Form__Field">
                     <label>Password</label>
                <input type="password" />
                </div>
               

                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}
