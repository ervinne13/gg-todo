import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Modal = ({ children, isOpen, onCloseModalRequested }) => (
    <div className={`lite-modal-bg ${isOpen ? '-active' : ''}`}>
        <div className="lite-modal-content">
            <div className="lite-modal-btn-wrapper">
                <button className="lite-modal-exit" onClick={onCloseModalRequested} >
                    &times;
                </button>
            </div>
            {children}
        </div>
    </div>
);

Modal.defaultProps = {
    isOpen: false
};

Modal.propTypes = {
    isOpen: PropTypes.bool
};

export default Modal;