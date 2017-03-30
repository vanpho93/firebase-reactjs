const defaultArray = [
    { id: 1, subject: 'Hoc Tap', content: 'Nop do an cuoi khoa', important: true },
    { id: 2, subject: 'An Choi', content: 'Di choi 8/3', important: false },
    { id: 3, subject: 'Hoc Tap', content: 'Lam bai tap ve nha', important: false }
    
];

const mangReducer = (state = defaultArray, action) => {
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
