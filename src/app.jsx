import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import List from './component/List';
import store from './redux/store';
import './api/foundationSetup';
import firebaseRef from './firebase';
import NoteModel from './model/NoteModel';

//Listen for the changes

const notesRef = firebaseRef.child('notes');

notesRef.on('child_added', snapshot => {
    const id = snapshot.key;
    const { subject, detail } = snapshot.val();
    const newNote = new NoteModel(id, subject, detail);
    store.dispatch({ type: 'ADD_ITEM', item: newNote });
});

notesRef.on('child_removed', snapshot => {
    const id = snapshot.key;
    store.dispatch({ type: 'REMOVE_ITEM', id });
});

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    document.getElementById('root')
);
