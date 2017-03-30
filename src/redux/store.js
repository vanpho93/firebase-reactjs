import reducer from './reducer';
import NoteModel from '../model/NoteModel';

const redux = require('redux');

const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));


NoteModel.getAllNotes().then(arr => store.dispatch({ type: 'SET_DATA', arrayData: arr }));
//foundation.zurb.com/sites/docs/

store.subscribe(() => console.log('State changed!!!'));

export default store;
