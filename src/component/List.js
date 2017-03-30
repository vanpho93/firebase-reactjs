import { connect } from 'react-redux';

import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';


class List extends React.Component {
    render() {
        const arrayEle = this.props.mang.map(e => (
            <Note
                noteObject={e}
                key={e.id}
            />
        ));
        return (
            <div className="container row">
                <div className="small-12 large-4 columns ">
                { arrayEle }
                <NoteForm parent={this} />
                </div>
            </div>
        );
    }
}

module.exports = connect(state => ({ mang: state.mang }))(List);
