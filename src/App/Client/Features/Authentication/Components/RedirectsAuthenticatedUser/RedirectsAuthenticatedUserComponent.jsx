import React from 'react';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

const RedirectsAuthenticatedUser = ({ user, children }) => {
    if (user) {
        const date = moment().format("YYYY-MM-DD");
        return <Redirect to={`/tasks/${date}`} />
    } else {
        return children;
    }
};

export default RedirectsAuthenticatedUser;