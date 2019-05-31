import React from 'react';
import Routes from './Routes';
import ReduxWrapper from 'App/Client/Redux/ReduxWrapper';

const App = () => (
    <ReduxWrapper>
        <Routes />
    </ReduxWrapper>
);

export default App;