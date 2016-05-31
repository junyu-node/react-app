import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, Profile } from '../containers';

export default (
    <Route path="/" component={App}>
        <Route path="Profile:username" component={Profile} />
        <IndexRoute component={Home} />

    </Route>
)