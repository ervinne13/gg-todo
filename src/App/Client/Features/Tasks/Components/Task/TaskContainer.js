import TaskComponent from './TaskComponent';
import { connect } from 'react-redux';
import { toggleTaskStatus, requestTaskDeletion } from 'App/Client/Features/Tasks/Redux/actions';

const mapDispatchToProps = dispatch => {
    return {
        onToggle: task => dispatch(toggleTaskStatus(task)),
        onRemove: task => dispatch(requestTaskDeletion(task))
    }
};

export default connect(null, mapDispatchToProps)(TaskComponent);