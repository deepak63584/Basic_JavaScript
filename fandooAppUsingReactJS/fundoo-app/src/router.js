import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../src/Component/SignIn';
import Signup from '../src/Component/SignUp';
import Dashboard from '../src/Component/Dashboard';
import ForgatePassword from '../src/Component/ForgatePassword';

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