import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <Fragment>
        <h1>Oops! The page you are looking for was not found.</h1>
        <Link to="/">Click here to go back home.</Link>
    </Fragment>
);

export default PageNotFound;