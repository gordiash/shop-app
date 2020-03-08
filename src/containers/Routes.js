import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from '../components/Main/Main'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/about" component={Main}/>
                <Route path="/shop" component={Main}/>
                <Route path="/contact" component={Main}/>
            </Switch>
        </div>
    )
}
