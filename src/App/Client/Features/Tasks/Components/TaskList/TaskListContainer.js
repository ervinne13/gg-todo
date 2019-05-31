import TaskListComponent from './TaskListComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {    
    return {        
        tasks: state.tasksReducers.tasksBeingDisplayed
    };
};

export default connect(mapStateToProps)(TaskListComponent);