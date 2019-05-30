import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'App/Client/Common/Components/FlatButton';
import './style.css';

class Task extends React.Component {

    triggerRemove(task) {
        if (this.props.onRemove) {
            this.props.onRemove(task);
        }
    }

    triggerToggle(task) {
        if (this.props.onToggle) {
            this.props.onToggle(task);
        }
    }

    render() {
        const { task } = this.props;
        const isTaskOpen = task.status === 'open';
        const toggleButtonClass = isTaskOpen ? 'grey' : 'info';
        const toggleButtonText = isTaskOpen ? 'Open' : 'Done';

        return (
            <div className={`task -${task.status}`}>
                <span className="task-text">{task.text}</span>
                <span className="task-actions">
                    <FlatButton type={toggleButtonClass} onClick={() => this.triggerToggle(task)}>{toggleButtonText}</FlatButton>
                    <FlatButton type="danger" onClick={() => this.triggerRemove(task)}>Remove</FlatButton>
                </span>
            </div>
        );
    }
}

Task.propTypes = {
    task: PropTypes.shape({
        text: PropTypes.string,
        status: PropTypes.oneOf(['open', 'done'])
    }).isRequired
};

export default Task;