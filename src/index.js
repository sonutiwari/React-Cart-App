import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "cart-fd6b4.firebaseapp.com",
    databaseURL: "https://cart-fd6b4.firebaseio.com",
    projectId: "cart-fd6b4",
    storageBucket: "cart-fd6b4.appspot.com",
    messagingSenderId: "225749437789",
    appId: "1:225749437789:web:f85eccb2c9d105bb956cb4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));
