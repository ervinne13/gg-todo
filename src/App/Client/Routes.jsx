import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RedirectsAuthenticatedUser from 'App/Client/Features/Authentication/Components/RedirectsAuthenticatedUser';
import RequiresAuthentication from 'App/Client/Features/Authentication/Components/RequiresAuthentication';

import LandingScene from 'App/Client/Features/Landing/Scenes/Landing';
import TaskListPerDateScene from 'App/Client/Features/Tasks/Scenes/TaskListPerDate';
import TaskFormPerDateScene from 'App/Client/Features/Tasks/Scenes/TaskFormPerDate';
import PageNotFound from 'App/Client/Features/ErrorHandling/PageNotFound';

const Routes = ({ userAuthenticated, user, signOut, signInWithGoogle }) => {
    if (user && userAuthenticated) {
        userAuthenticated(user);
    }

    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ (props) => 
                <RedirectsAuthenticatedUser >
                    <LandingScene {...props} signInWithGoogle={ signInWithGoogle } />
                </RedirectsAuthenticatedUser>
            } />

            <Route exact path="/tasks/:date/create" component={ (props) =>
                <RequiresAuthentication >
                    <TaskFormPerDateScene { ...props } signOut={ signOut } />
                </RequiresAuthentication>
            } /> } />

            <Route exact path="/tasks/:date" component={ (props) =>
                <RequiresAuthentication >
                    <TaskListPerDateScene { ...props } signOut={ signOut }/>
                </RequiresAuthentication>
            } />

            <Route path="*" component={ PageNotFound } />
        </Switch> 
    </BrowserRouter>
    );
};

export default Routes;