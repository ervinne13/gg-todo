import React from 'react';
import FlatButton from 'App/Client/Common/Components/FlatButton';
import './style.css';

const ConfirmDeletionComponent = ({ task, onConfirm, onCancel }) => (
    <div className="confirm-deletion-prompt">
        <div className="message">
            <h1>Are you sure you want to remove this task?</h1>
            <p>This action cannot be undone</p>
        </div>
        <div className="actions">
            <FlatButton type="danger" onClick={() => onConfirm(task)}>Remove</FlatButton>
            <FlatButton type="grey" onClick={() => onCancel()}>Cancel</FlatButton>
        </div>
    </div>
);

export default ConfirmDeletionComponent;