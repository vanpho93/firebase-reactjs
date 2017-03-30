const a = {
    'abc-1': {
        sub: 'Nguyen Van Pho',
        det: 'Ha ha ha'
    },
    'abc-2': {
        sub: 'Nguyen Van Pho',
        det: 'Ha ha ha'
    }
};

const objectIdToArray = (obj) => {
    const keys = Object.keys(obj);
    return keys.map(e => ({
        id: e, ...obj[e]
    }));
};

const arr = objectIdToArray(a);
console.log(arr);
