import { connect } from 'react-redux';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import React from 'react';
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';

class List extends React.Component {
    logOut() {
        firebase.auth().signOut().then(() => console.log('Sign out!'));
    }
    render() {
        const { user } = this.props;
        const arrayEle = this.props.mang.map(e => (
            <Note
                noteObject={e}
                key={e.id}
            />
        ));
        const html = (
            <div className="container row">
                <div className="small-12 large-4 columns">
                    <button 
                        className="button" 
                        onClick={this.logOut.bind(this)}
                    >Log out</button>
                { arrayEle }
                <NoteForm parent={this} />
                </div>
            </div>
        );
        const redirect = <Redirect to='/' />;
        return (user ? html : redirect);
    }
}

module.exports = connect(state => ({ mang: state.mang, user: state.user }))(List);
