import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB-vKV2JM_5mNbac25cpGAs6nFNzhjF5-o",
    authDomain: "king-of-castle-18.firebaseapp.com",
    databaseURL: "https://king-of-castle-18.firebaseio.com",
    projectId: "king-of-castle-18",
    storageBucket: "king-of-castle-18.appspot.com",
    messagingSenderId: "1077808133884"
};


const app = firebase.initializeApp(config);

export default app;