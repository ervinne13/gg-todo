
import { AUTHENTICATE } from './actions';

const initialState = {
    authenticated: false,
    user: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATE:
            return handleAuthenticate(state, action);
        default:
            return state;
    }
}

const handleAuthenticate = (state, action) => {    
    return { ...state, authenticated: true, user: action.user };
};

export default reducer;