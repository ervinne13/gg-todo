
import { generateUUID } from 'Domain/Identification/Services/IDGenerationService';

import { 
    storeTask as storeTaskInFirestore,
    loadAllTasks as loadAllTasksInFirestore,
    updateTask as updateTaskInFirestore,
    deleteTask as deleteTaskInFirestore,
 } from 'Persistence/Tasks/TaskFirestorePersistenceModule';

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
    return (dispatch, getState) => {
        const user = getState().authenticationReducers.user;
        loadTasksPerDateAndDispatch(date, user, dispatch);
    };
};

const loadTasksPerDateAndDispatch = (date, user, dispatch) => {
    loadAllTasksInFirestore(user)
            .then(tasks => dispatch(
                {
                    type: RECEIVE_TASKS,
                    date,
                    tasks
                }
            ));
};

export const addTask = (taskValues) => {    
    return (dispatch, getState) => {
        const { user } = getState().authenticationReducers;
        if (!user) {
            throw new Error('Unathenticated');
        }

        const task = {
            id: generateUUID(),
            author: user.email,
            ...taskValues
        }

        storeTaskInFirestore(task)
            .then(dispatch({
                type: ADD_TASK,
                task
            }));        
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
    return (dispatch) => {
        deleteTaskInFirestore(task)
            .then(dispatch({
                type: DELETE_TASK,
                task
            }));
    };
};

export const toggleTaskStatus = (task) => {
    return (dispatch, getState) => {
        dispatch({ type: TOGGLE_TASK, task });
        const user = getState().authenticationReducers.user;
        const { tasksBeingDisplayed } = getState().tasksReducers;
        const processedTask = tasksBeingDisplayed
            .find(taskBeingDisplayed => taskBeingDisplayed.id === task.id);
        
        updateTaskInFirestore(processedTask)
            .then(() => loadTasksPerDateAndDispatch(processedTask.date, user, dispatch));
    };
};

export const refreshTaskSummaries = () => {
    return { type: REFRESH_TASK_SUMMARIES };
};