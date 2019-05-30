import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ children, fill, size, className, ...props }) => (
    <button className={`round-corner-btn fill-${fill} -color-main -size-${size} ${className}`} {...props}>
        {children}
    </button>
);

Button.defaultProps = {
    fill: 'background',
    size: 'regular',
    className: '',
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    fill: PropTypes.oneOf(['border', 'background']),
    size: PropTypes.oneOf(['regular', 'large']),
};

export default Button;