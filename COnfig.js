import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Cb6BnCqP7XczLTt7EhbzLSZTKhhRMZw",
  authDomain: "ssgs-ceaaa.firebaseapp.com",
  databaseURL: "https://ssgs-ceaaa-default-rtdb.firebaseio.com",
  projectId: "ssgs-ceaaa",
  storageBucket: "ssgs-ceaaa.appspot.com",
  messagingSenderId: "298641666306",
  appId: "1:298641666306:web:21cf74ab3055f2ebf2d21b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
