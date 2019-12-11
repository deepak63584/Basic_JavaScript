import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../src/Component/signIn';
import Signup from '../src/Component/signUp';
import Dashboard from '../src/Component/dashboard';
import ForgatePassword from '../src/Component/forgatePassword';

function Routing() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={SignIn} />
                <Route path='/signup' component={Signup} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/forgatepassword' component={ForgatePassword} />
            </Switch>
        </Router>
    )
}
export default Routing;