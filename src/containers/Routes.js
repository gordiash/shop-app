import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from '../components/Main/Main'
import Login from "../components/Auth/Login/Login"
import Register from '../components/Auth/Register/Register'
import PasswordReset from "../components/Auth/PasswordReset/PasswordReset"

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/about" component={Main}/>
                <Route path="/shop" component={Main}/>
                <Route path="/contact" component={Main}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/reset-password" component={PasswordReset}/>
            </Switch>
        </div>
    )
}
