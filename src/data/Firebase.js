import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots:true};

const config = {
    apiKey: "AIzaSyC9Gq_HY8udYfUFePb-uQ5PPIuUIJxRXy0",
    authDomain: "mrket-45d28.firebaseapp.com",
    databaseURL: "https://mrket-45d28.firebaseio.com",
    projectId: "mrket-45d28",
    storageBucket: "mrket-45d28.appspot.com",
    messagingSenderId: "139354350658"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;


