import React from 'react';
import Task from 'App/Client/Features/Tasks/Components/Task';
import './style.css';

const TaskListComponent = ({ tasks, on }) => (
    <ul className="task-list">        
        {tasks.map(task => <li><Task task={task} /></li>)}
    </ul>
);

export default TaskListComponent;