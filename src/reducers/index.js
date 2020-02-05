import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from '../components/pages/Login/reducer';
import SignupReducer from '../components/pages/Signup/reducer';
import verifyReducer from '../components/pages/Verify/reducer';
import profileReducer from '../components/pages/Profile/reducer';

const rootReducer =  (history) => combineReducers({
    login: loginReducer,
    signup: SignupReducer,
    verify: verifyReducer,
    profile: profileReducer,
    router: connectRouter(history),
});

export default rootReducer;