import React from 'react';
import Routes from './Routes';
import ReduxWrapper from 'App/Client/Redux/ReduxWrapper';
import { configureFirebase } from 'App/Config/firebase';

configureFirebase();
const App = () => (
    <ReduxWrapper>
        <Routes />
    </ReduxWrapper>
);

export default App;