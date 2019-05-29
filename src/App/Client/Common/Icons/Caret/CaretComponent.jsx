import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from './caret-up.svg';

const CaretComponent = ({ direction, ...props }) => {
    const size = '54px';
    const transformationsPerDirection = {
        "up": "rotate(0)",
        "down": "rotate(180)",
    };
    const transform = transformationsPerDirection[direction];

    return (
        <Logo { ...props } width={ size } height={ size } transform={ transform } />
    );
};

CaretComponent.propTypes = {
    direction: PropTypes.oneOf(['up', 'down'])
};

export default CaretComponent;