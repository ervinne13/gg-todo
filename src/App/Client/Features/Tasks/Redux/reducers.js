import {
    RECEIVE_TASKS,
    ADD_TASK,
    REQUEST_TASK_DELETION,
    CANCEL_TASK_DELETION,
    DELETE_TASK,
    TOGGLE_TASK,
    REFRESH_TASK_SUMMARIES
} from './actions';

const initialState = {
    currentDateSelected: null,
    tasks: [],
    tasksBeingDisplayed: [],
    taskBeingDeleted: null,
    taskSummariesPerDate: []
}

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_TASKS:
            return handleReceiveTasksActions(state, action);
        case ADD_TASK:
            return handleRefreshTaskSummaries(handleAddTaskAction(state, action), action);
        case TOGGLE_TASK:
            return handleRefreshTaskSummaries(handleToggleTaskAction(state, action), action);
        case REQUEST_TASK_DELETION:
            return handleRefreshTaskSummaries(handleRequestTaskDeletion(state, action), action);
        case CANCEL_TASK_DELETION:
            return handleCancelTaskDeletion(state);
        case DELETE_TASK:
            return handleRefreshTaskSummaries(handleRemoveTaskAction(state, action), action);            
        case REFRESH_TASK_SUMMARIES:
            return handleRefreshTaskSummaries(state, action);
        default:        
            return state;
    }
};

const handleReceiveTasksActions = (state, action) => {
    const currentDateSelected = action.date;
    const tasksBeingDisplayed = state.tasks.filter(task => task.date === currentDateSelected);
    return { ...state, tasksBeingDisplayed, currentDateSelected };
};

const handleAddTaskAction = (state, action) => {
    const tasks = [
        ...state.tasks,
        action.task
    ];

    return { ...state, tasks };
};

const handleToggleTaskAction = (state, action) => {
    const tasks = toggleTaskFromCollection([ ...state.tasks ], action);
    const tasksBeingDisplayed = toggleTaskFromCollection([ ...state.tasksBeingDisplayed ], action);

    return { ...state, tasks, tasksBeingDisplayed };
};

const toggleTaskFromCollection = (tasks, action) => {
    return tasks.map(task => {
        const idMatches = action.task.id === task.id;
        const isOpen = task.status === 'open';
        if (idMatches && isOpen) {
            return { ...task, status: 'done' };
        } else if (idMatches && !isOpen) {
            return { ...task, status: 'open' };
        } else {
            return task;
        }
    })
};

const handleRequestTaskDeletion = (state, action) => {
    const taskBeingDeleted = { ...action.task };
    return { ...state, taskBeingDeleted };
};

const handleCancelTaskDeletion = (state) => {
    const taskBeingDeleted = null;
    return { ...state, taskBeingDeleted };
};

const handleRemoveTaskAction = (state, action) => {
    const taskBeingDeleted = null;
    const tasks = [ ...state.tasks ].filter(task => action.task.id !== task.id);
    const tasksBeingDisplayed = [ ...state.tasksBeingDisplayed ].filter(task => action.task.id !== task.id);

    return { ...state, tasks, tasksBeingDisplayed, taskBeingDeleted };
};

const handleRefreshTaskSummaries = (state, action) => {    
    let taskSummariesPerDate = {};

    state.tasks.forEach(task => {
        if (task.date in taskSummariesPerDate) {
            taskSummariesPerDate[task.date] = addTaskToSummary(taskSummariesPerDate[task.date], task);
        } else {
            const newTaskSummary = { date: task.date, taskCount: 0, doneTaskCount: 0 };
            taskSummariesPerDate[task.date] = addTaskToSummary(newTaskSummary, task);
        }
    });
    
    taskSummariesPerDate = Object.values(taskSummariesPerDate);
    console.log(taskSummariesPerDate);
    return { ...state, taskSummariesPerDate };
};

const addTaskToSummary = (summary, task) => {
    let computedSummary = { ...summary };

    computedSummary.taskCount ++;
    if (task.status !== 'open') {
        computedSummary.doneTaskCount ++;   
    }

    return computedSummary;
};

export default tasksReducer