import { connect } from 'react-redux';

import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';


class List extends React.Component {
    render() {
        const arrayEle = this.props.mang.map(e => (
            <Note
                index={e.id}
                subject={e.subject}
                content={e.content}
                important={e.important}
                key={e.id}
                parent={this}
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

/**
    1. Cai dat stage-0
    2. Update file .babelrc
    3. Viet action
    4. Connect trong file Node
    4. Check lai index - id trong file List
*/
