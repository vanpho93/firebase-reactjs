import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component {
    save() {
        const { noteObject, dispatch } = this.props;
        noteObject.updateNote(this.refs.txtContent.value);
        dispatch({ type: 'CANCEL_UPDATE' });
    }
    cancel() {
        const { dispatch } = this.props;
        dispatch({ type: 'CANCEL_UPDATE' });
    }
    update() {
        const { dispatch, noteObject } = this.props;
        const { id } = noteObject;
        dispatch({ type: 'CREATE_UPDATE', id });
    }
    remove() {
      const { noteObject } = this.props;
      noteObject.removeNote();
    }
    render() {
        const { updatingId, noteObject } = this.props;
        const { id, detail, subject } = noteObject;
        const input = (
            <input 
                type="text" 
                defaultValue={detail} 
                placeholder="Enter new content" 
                ref="txtContent" 
            />);
        const xhtml = updatingId === id ? input : <p>{detail}</p>;

        const buttonUpdate = (
            <div>
                <button className="button" onClick={this.cancel.bind(this)}>Huỷ</button>
                <button className="button" onClick={this.save.bind(this)}>Lưu</button>
            </div>
        );

        const buttonNotUpdate = (
            <div>
                <button className="button" onClick={this.remove.bind(this)}>Xoá</button>
                <button className="button" onClick={this.update.bind(this)}>Sửa</button>
            </div>
        );

        const htmlControls = updatingId === id ? buttonUpdate : buttonNotUpdate;

        return (
            <div>
                <h3>{subject}</h3>
                { xhtml }
                <hr />
                { htmlControls }
            </div>
        );
    }
}

module.exports = connect(state => 
    ({ updatingId: state.updatingId })
)(Note);
