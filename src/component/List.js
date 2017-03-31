import { connect } from 'react-redux';
import firebase from 'firebase';

import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

class List extends React.Component {
    logOut() {
        firebase.auth().signOut().then(() => console.log('Sign out!'));
    }
    render() {
        const arrayEle = this.props.mang.map(e => (
            <Note
                noteObject={e}
                key={e.id}
            />
        ));
        return (
            <div className="container row">
                <div className="small-12 large-4 columns">
                    <button className="button" onClick={this.logOut.bind(this)}>Log out</button>
                { arrayEle }
                <NoteForm parent={this} />
                </div>
            </div>
        );
    }
}

module.exports = connect(state => ({ mang: state.mang }))(List);
