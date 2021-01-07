import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCjja4IKILd18ih6VJJsTdVudwfwEGdVV0',
	authDomain: 'modular-embassy-138204.firebaseapp.com',
	projectId: 'modular-embassy-138204',
	storageBucket: 'modular-embassy-138204.appspot.com',
	messagingSenderId: '1051676517921',
	appId: '1:1051676517921:web:b95fb0fb5a6f36f59ce560',
	measurementId: 'G-11WSNGE01H'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
