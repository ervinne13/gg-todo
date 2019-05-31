
import Routes from './Routes';
import { connect } from 'react-redux';
import { authenticate } from 'App/Client/Features/Authentication/Redux/actions';

const mapDispatchToProps = (dispatch) =>  {
    return {
        userAuthenticated: user => dispatch(authenticate(user))
    }
};

export default connect(null, mapDispatchToProps)(Routes);