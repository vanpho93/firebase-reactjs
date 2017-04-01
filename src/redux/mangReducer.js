const mangReducer = (state = [], action) => {
    if (action.type === 'SET_DATA') {
        return action.arrayData;
    }
    if (action.type === 'REMOVE_ITEM') {
        return state.filter(e => e.id !== action.id); 
    }
    if (action.type === 'UPDATE_ITEM') {
        return state.map(e => {
            if (e.id !== action.item.id) return e;
            return action.item;
        });
    }
    if (action.type === 'ADD_ITEM') {
        return [...state, action.item];
    }
    return state;
};

export default mangReducer;
