import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const FlatButtonComponent = ({ children, type, ...props }) => (
    <button className={`flat-btn -${type} -color-main`} {...props}>
        {children}
    </button>
);

FlatButtonComponent.defaultProps = {
    type: 'primary'
};

FlatButtonComponent.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'info', 'danger', 'grey'])
};

export default FlatButtonComponent;