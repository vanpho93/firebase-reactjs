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
firebase.database().ref().set({
    name: 'Nguyen Van Pho'
});
