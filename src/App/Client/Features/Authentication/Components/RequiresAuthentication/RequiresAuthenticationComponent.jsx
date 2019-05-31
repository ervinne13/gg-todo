import React  from 'react';
import { Redirect } from 'react-router-dom';

const RequiresAuthentication = ({ user, children }) => {
    if (user) {
        return children;
    } else {        
        return <Redirect to={`/`} />        
    }
};

export default RequiresAuthentication;