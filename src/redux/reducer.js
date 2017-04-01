import mang from './mangReducer';
import updatingId from './idReducer';
import user from './userReducer';

const redux = require('redux');

const reducer = redux.combineReducers({
    mang, updatingId, user
});

export default reducer;
