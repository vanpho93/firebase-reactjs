import firebaseRef from '../firebase';

const objectIdToArray = (obj) => {
    const keys = Object.keys(obj);
    return keys.map(e => ({
        id: e, ...obj[e]
    }));
};

class NoteModel {
    constructor(id, subject, detail) {
        this.id = id;
        this.subject = subject;
        this.detail = detail;
    }

    addNoteToDatabase() {
        const notesRef = firebaseRef.child('notes/');
        notesRef.push({
            subject: this.subject,
            detail: this.detail
        });
    }

    removeNote() {
        return firebaseRef.child('notes').child(this.id).remove();
    }

    static getAllNotes() {
        return firebaseRef.once('value')
        .then(snapshot => {
            const value = snapshot.val().notes;
            const arrObject = objectIdToArray(value);
            return arrObject.map(e => new NoteModel(e.id, e.subject, e.detail));
        });
    }
}

export default NoteModel;
