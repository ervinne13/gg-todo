import GoogleLoginButtonComponent from './GoogleLoginButtonComponent';
import { connect } from 'react-redux';
import { authenticate } from 'App/Client/Features/Authentication/Redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onUserAuthenticated: user => dispatch(authenticate(user))
    }
};

export default connect(null, mapDispatchToProps)(GoogleLoginButtonComponent);