import RequiresAuthenticationComponent from './RequiresAuthenticationComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.authenticationReducers.user
    }
};

export default connect(mapStateToProps)(RequiresAuthenticationComponent);