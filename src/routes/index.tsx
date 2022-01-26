import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';


const Routes: React.FC = () => (
    <Switch>
        <Route component={SignIn} path="/" exact/>
    </Switch>
)

export { Routes };
