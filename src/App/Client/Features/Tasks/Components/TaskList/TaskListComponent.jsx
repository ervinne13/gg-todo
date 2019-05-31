import React from 'react';
import Task from 'App/Client/Features/Tasks/Components/Task';
import './style.css';

const TaskListComponent = ({ tasks }) => (
    <ul className="task-list">
        {tasks.map(task => 
            <li key={task.id}>
                <Task task={task} />
            </li>
        )}
    </ul>
);

export default TaskListComponent;