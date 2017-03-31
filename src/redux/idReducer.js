const idReducer = (state = null, action) => {
    if (action.type === 'CANCEL_UPDATE') {
        return null;
    }
    if (action.type === 'CREATE_UPDATE') {
        return action.id;
    }
    return state;
};

export default idReducer;
