import React from 'react';
import Routes from './RoutesContainer';
import ReduxWrapper from 'App/Client/Redux/ReduxWrapper';
import { applyFirebaseAuthAndConfigToComponent } from 'App/Config/firebase';

const App = (authProps) => (
    <ReduxWrapper>
        <Routes { ...authProps } />
    </ReduxWrapper>
);

export default applyFirebaseAuthAndConfigToComponent(App);