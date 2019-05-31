import TaskListPerDateScene from './TaskListPerDateScene';
import { connect } from 'react-redux';
import { receiveTasks } from 'App/Client/Features/Tasks/Redux/actions';

const mapStateToProps = (state) => {
    const isConfirmDeletionModalOpen = !!state.tasksReducers.taskBeingDeleted
    return {
        isConfirmDeletionModalOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onReadyToReceiveTasks: date => dispatch(receiveTasks(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPerDateScene);