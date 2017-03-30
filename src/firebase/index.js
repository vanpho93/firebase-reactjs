import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCZP2kJa-eEIXhXs1LdIEEqeRnsyk1rd7c',
    authDomain: 'todo-9a424.firebaseapp.com',
    databaseURL: 'https://todo-9a424.firebaseio.com',
    storageBucket: 'todo-9a424.appspot.com',
    messagingSenderId: '543818453557'
};
firebase.initializeApp(config);

//Saving data for whole app
const firebaseRef = firebase.database().ref();

// firebaseRef.set({
//     username: 'Pho',
//     notes: { 
//         id: 1, 
//         subject: 'Hoc Tap', 
//         content: 'Nop do an cuoi khoa', 
//         important: true 
//     }
// });

//Updating a child prop
//Set return a promise, so you can call then and catch method of it
// firebaseRef.child('username').set('Khoa');

//Updating with updata method
// firebaseRef.update({ username: 'vanpho93' });

//Update multiref
// firebaseRef.update({
//     username: 'PhoNguyen',
//     'notes/id': 2
// });

//Muti childs works as well
// firebaseRef.child('notes').child('important').update({ a: 1 });
// firebaseRef.child('notes/important').update({ a: 1 });

// firebase.child('...').remove();
//call update with value set to null is another way to remove

//Fetching all data from firebase
// firebaseRef.once('value')
// .then(snapshot => console.log(snapshot.val()));

//Fetching some data
// firebaseRef.child('notes').once('value')
// .then(snapshot => console.log(snapshot.key, snapshot.val()));

//Firebase data changed handler, you can set on for root and child
// firebaseRef.on('value', () => console.log('Data changed'));

//Off the firebase listener by passing the function 
// firebaseRef.off();
// firebaseRef.off(listener);
