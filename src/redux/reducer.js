import mang from './mangReducer';
import updatingId from './idReducer';

const redux = require('redux');

const reducer = redux.combineReducers({
    mang, updatingId
});

export default reducer;
