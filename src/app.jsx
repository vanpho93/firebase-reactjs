import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import List from './component/List';
import Login from './component/Login';
import store from './redux/store';
import './api/foundationSetup';
import firebaseRef from './firebase';
import NoteModel from './model/NoteModel';

//Listen for the changes
const notesRef = firebaseRef.child('notes');

//Listen for adding new todo
notesRef.on('child_added', snapshot => {
    const id = snapshot.key;
    const { subject, detail } = snapshot.val();
    const newNote = new NoteModel(id, subject, detail);
    store.dispatch({ type: 'ADD_ITEM', item: newNote });
});

//Listen for removing a child
notesRef.on('child_removed', snapshot => {
    const id = snapshot.key;
    store.dispatch({ type: 'REMOVE_ITEM', id });
});

//Listen for updating a child
notesRef.on('child_changed', snapshot => {
    const id = snapshot.key;
    const { subject, detail } = snapshot.val();
    store.dispatch({ type: 'UPDATE_ITEM', item: new NoteModel(id, subject, detail) });
});


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={Login} />
                <Route path='/todos' component={List} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
