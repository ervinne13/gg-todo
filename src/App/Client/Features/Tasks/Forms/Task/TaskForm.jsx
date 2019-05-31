import React from 'react';
import PropTypes from 'prop-types';
import Button from 'App/Client/Common/Components/Button';
import { Redirect } from 'react-router-dom';
import './style.css'

class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        const task = props.task ? props.task : { text: '', status: 'open' };
        this.state = {
            taskSubmitted: false,            
            task,
            errorMessage: '',
            headerText: this.resolveHeaderText(task),
            submitActionText: this.resolveSubmitActionText(task)
        };
    }

    resolveHeaderText = (task) => {
        const { id: taskId } = task;
        if (taskId) {
            return `Updating Task (${taskId})`;
        } else {
            return "Creating new Task";
        }
    }

    resolveSubmitActionText = (task) => {
        const { id: taskId } = task;
        if (taskId) {
            return `Update Task`;
        } else {
            return "Create Task";
        }
    }

    onTextChange = (event) => {
        const task = { ...this.state.task };
        task.text = event.target.value;
        this.setState({ task, errorMessage: '' });
    }

    triggerSaveTask = (event) => {
        event.preventDefault();
        if (!this.validateTask(this.state.task)) {
            return;
        }

        if (this.props.onSaveTask) {
            const { date } = this.props;
            const task = { ...this.state.task, date };            
            this.props.onSaveTask(task);
        }

        this.setState({ taskSubmitted: true });
    }

    /**
     * This normally belongs to a "Domain" object but since 
     * it's alone (for now at least), let's leave this here
     */
    validateTask = (task) => {
        const isTaskTextProvided = String(task.text).trim() !== '';

        if (!isTaskTextProvided) {
            this.setState({ errorMessage: "Task text is required!" });
        }

        return isTaskTextProvided;
    }

    render() {
        if (this.state.taskSubmitted) {
            const { date } = this.props;
            return <Redirect to={ `/tasks/${date}` } />
        }

        const { headerText, submitActionText, errorMessage } = this.state;
        return (
            <form className="task-form" onSubmit={this.triggerSaveTask}>
                <h1>{headerText}</h1>

                <div className="task-text-input-wrapper">
                    <input
                        id="task-text-input"
                        type="text"
                        placeholder="Enter Task"
                        value={this.state.task.text}
                        onChange={this.onTextChange}
                    />
                </div>
                <div className="task-text-error-wrapper">
                    <label
                        className="error-text"
                        htmlFor="task-text-input">
                        {errorMessage}
                    </label>
                </div>

                <Button size="regular" type="submit">
                    {submitActionText}
                </Button>
            </form>
        );
    }
}

TaskForm.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired,
        status: PropTypes.oneOf(['open', 'done']).isRequired
    })
};

export default TaskForm;