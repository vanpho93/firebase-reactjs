import React from 'react';
import NoteModel from '../model/NoteModel';

export default class NoteForm extends React.Component {
  add() {
    const subject = this.refs.txtSubject.value;
    const detail = this.refs.txtContent.value;
    this.refs.txtSubject.value = '';
    this.refs.txtContent.value = '';
    const newNote = new NoteModel(undefined, subject, detail);
    newNote.addNote();
  }
  render() {
    return (
      <div className='div-form'>
        <br />
        <input type="text" ref="txtSubject" placeholder="subject" />
        <input type="text" ref="txtContent" placeholder="content" />
        <button onClick={this.add.bind(this)} className="button">Add</button>
      </div>
    );
  }
}
