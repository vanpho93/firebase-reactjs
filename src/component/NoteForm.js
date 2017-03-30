import React from 'react';
import { connect } from 'react-redux';

class NoteForm extends React.Component {
  add() {
    const { dispatch } = this.props;
    const newObj = {
        id: this.refs.txtId.value,
        subject: this.refs.txtSubject.value,
        content: this.refs.txtContent.value,
        important: true
    };
    dispatch({ type: 'ADD_ITEM', item: newObj });
  }
  render() {
    return (
      <div className='div-form'>
        <br />
        <input type="text" ref="txtId" placeholder="id" />
        <input type="text" ref="txtSubject" placeholder="subject" />
        <input type="text" ref="txtContent" placeholder="content" />
        <button onClick={this.add.bind(this)} className="button">Add</button>
      </div>
    );
  }
}

module.exports = connect()(NoteForm);
