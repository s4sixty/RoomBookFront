import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { profile } from './users.reducer';
import { rooms } from './rooms.reducer';

const rootReducer = combineReducers({
    alert,
    authentication,
    profile,
    rooms

});

export default rootReducer;