import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBGqwZDraVnbiYihzkr1iScXAi8uop91SE",
    authDomain: "team-voting-ad114.firebaseapp.com",
    databaseURL: "https://team-voting-ad114-default-rtdb.firebaseio.com",
    projectId: "team-voting-ad114",
    storageBucket: "team-voting-ad114.appspot.com",
    messagingSenderId: "625553077761",
    appId: "1:625553077761:web:080cfd3f39789ff1f07200"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();