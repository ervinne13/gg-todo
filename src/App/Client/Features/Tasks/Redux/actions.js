
import { generateUUID } from 'Domain/Identification/Services/IDGenerationService';

/** Action Types */
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const REQUEST_TASK_DELETION = 'REQUEST_TASK_DELETION';
export const CANCEL_TASK_DELETION = 'CANCEL_TASK_DELETION';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const REFRESH_TASK_SUMMARIES = 'REFRESH_TASK_SUMMARIES';

/** Action Creators */

export const receiveTasks = (date) => {
    return {
        type: RECEIVE_TASKS,
        date
    };
};

export const addTask = (taskValues) => {
    const task = {
        id: generateUUID(),
        ...taskValues
    }
    return {
        type: ADD_TASK,
        task
    };
};

export const requestTaskDeletion = (task) => {
    return {
        type: REQUEST_TASK_DELETION,
        task
    };
};

export const cancelTaskDeletion = () => {
    return { type: CANCEL_TASK_DELETION };
};

export const deleteTask = (task) => {
    return {
        type: DELETE_TASK,
        task
    };
};

export const toggleTaskStatus = (task) => {
    return {
        type: TOGGLE_TASK,
        task
    };
};

export const refreshTaskSummaries = () => {
    return { type: REFRESH_TASK_SUMMARIES };
};