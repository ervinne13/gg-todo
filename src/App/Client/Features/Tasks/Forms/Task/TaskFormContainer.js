import TaskForm from './TaskForm';
import { connect } from 'react-redux';
import { addTask } from 'App/Client/Features/Tasks/Redux/actions';

const mapDispatchToProps = dispatch => {
    return {
        onSaveTask: task => dispatch(addTask(task))
    }
};

export default connect(null, mapDispatchToProps)(TaskForm);