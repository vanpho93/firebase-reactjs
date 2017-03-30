import reducer from './reducer';

const redux = require('redux');

const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//foundation.zurb.com/sites/docs/

store.subscribe(() => console.log('State changed!!!'));

export default store;
