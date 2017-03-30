import NoteModel from '../model/NoteModel';

const defaultArray = [
    new NoteModel('acadca', 'Xin chao', 'Alo xin chao tat ca cac ban'),
    new NoteModel('afasjf', 'Tam biet', 'Alo, tam biet cac ban')
];

const mangReducer = (state = defaultArray, action) => {
    if (action.type === 'SET_DATA') {
        return action.arrayData;
    }
    if (action.type === 'REMOVE_ITEM') {
        return state.filter(e => e.id !== action.index); 
    }
    if (action.type === 'UPDATE_ITEM') {
        return state.map(e => {
            if (e.id !== action.index) return e;
            return { ...e, content: action.content };
        });
    }
    if (action.type === 'ADD_ITEM') {
        return [...state, action.item];
    }
    return state;
};

export default mangReducer;
