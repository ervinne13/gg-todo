import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingScene from 'App/Client/Features/Landing/Scenes/Landing';
import TaskListPerDateScene from 'App/Client/Features/Tasks/Scenes/TaskListPerDate';
import TaskFormPerDateScene from 'App/Client/Features/Tasks/Scenes/TaskFormPerDate';
import PageNotFound from 'App/Client/Features/ErrorHandling/PageNotFound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ LandingScene } />
            <Route exact path="/tasks/:taskId/edit" component={ TaskFormPerDateScene } />
            <Route exact path="/tasks/create" component={ TaskFormPerDateScene } />            
            <Route exact path="/tasks/:date" component={ TaskListPerDateScene } />
            <Route path="*" component={ PageNotFound } />
        </Switch> 
    </BrowserRouter>
);

export default Routes;