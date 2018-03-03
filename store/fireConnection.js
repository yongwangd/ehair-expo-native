const firebase = require('firebase');

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyBnX1Yt1Drfb51N7GTELUaOQcTM3yiVA3Q',
  authDomain: 'ehair-expo-dev.firebaseapp.com',
  databaseURL: 'https://ehair-expo-dev.firebaseio.com',
  projectId: 'ehair-expo-dev',
  storageBucket: 'ehair-expo-dev.appspot.com',
  messagingSenderId: '401113474249'
};

firebase.initializeApp(config);

export const signinWithFirebase = (username, password) =>
  firebase.auth().signInWithEmailAndPassword(username, password);
export const signoutWithFirebase = () => firebase.auth().signOut();
export const getFirebase = () => firebase;
export const getFireStorage = () => firebase.storage();
export const getFireStorageRef = () => firebase.storage().ref();
export const getBusinessCardRef = () =>
  firebase
    .storage()
    .ref()
    .child('businessCards');
export const getFireDB = () => firebase.database();
