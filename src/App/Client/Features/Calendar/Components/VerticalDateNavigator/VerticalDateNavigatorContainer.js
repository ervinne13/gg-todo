
import VerticalDateNavigatorComponent from './VerticalDateNavigatorComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        tasksSummary: state.tasksReducers.taskSummariesPerDate
    }
};

export default connect(mapStateToProps)(VerticalDateNavigatorComponent);