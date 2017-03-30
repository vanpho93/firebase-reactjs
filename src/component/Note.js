import React from 'react';
import { connect } from 'react-redux';

const getClass = isImportant => (isImportant ? 'red' : 'green');

class Note extends React.Component {
    save() {
        const newContent = this.refs.txtContent.value;
        const { index, dispatch } = this.props;
        dispatch({ type: 'UPDATE_ITEM', index, content: newContent });
        dispatch({ type: 'CANCEL_UPDATE' });
    }
    cancel() {
        const { dispatch } = this.props;
        dispatch({ type: 'CANCEL_UPDATE' });
    }
    update() {
        const { dispatch, index } = this.props;
        dispatch({ type: 'CREATE_UPDATE', index });
    }
    remove() {
      const { index, dispatch } = this.props;
      dispatch({ type: 'REMOVE_ITEM', index });
    }
    render() {
        const { subject, content, important, updatingId, index } = this.props;
        const input = (
            <input 
                type="text" 
                defaultValue={content} 
                placeholder="Enter new content" 
                ref="txtContent" 
            />);
        const xhtml = updatingId === index ? input : <p>{content}</p>;

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

        const htmlControls = updatingId === index ? buttonUpdate : buttonNotUpdate;

        return (
            <div>
                <h3 className={getClass(important)}>{subject}</h3>
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
