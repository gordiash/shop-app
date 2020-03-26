import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from '../components/Main/Main'
import Login from "../components/Auth/Login/Login"
import Register from '../components/Auth/Register/Register'
import PasswordReset from "../components/Auth/PasswordReset/PasswordReset"
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="/shop" component={Main}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/reset-password" component={PasswordReset}/>
               
            </Switch>
        </div>
    )
}
