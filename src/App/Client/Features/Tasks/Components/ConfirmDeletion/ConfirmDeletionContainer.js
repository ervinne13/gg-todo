
import ConfirmDeletionComponent from './ConfirmDeletionComponent';
import { connect } from 'react-redux';
import { deleteTask, cancelTaskDeletion } from 'App/Client/Features/Tasks/Redux/actions';

const mapStateToProps = (state) => {
    return {
        task: state.tasksReducers.taskBeingDeleted
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onConfirm: task => dispatch(deleteTask(task)),
        onCancel: () => dispatch(cancelTaskDeletion())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeletionComponent);