import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDrS2OPlJJlIntuB5lrm8kmDphn5p-8zjA",
  authDomain: "pro-c60-school-attendance.firebaseapp.com",
  databaseURL: "https://pro-c60-school-attendance-default-rtdb.firebaseio.com",
  projectId: "pro-c60-school-attendance",
  storageBucket: "pro-c60-school-attendance.appspot.com",
  messagingSenderId: "817391311497",
  appId: "1:817391311497:web:63e8cd677e94fa3b4a0458"
};
 firebase.initializeApp(firebaseConfig);


  export default firebase.database()
 

  