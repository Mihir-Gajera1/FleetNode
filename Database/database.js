var firebase = require('firebase');


 var config = {
    apiKey: "AIzaSyDZiarvhBiFUQQBt7_jyQYvuHtzemc7iUk",
    authDomain: "fleet-track-2018.firebaseapp.com",
    databaseURL: "https://fleet-track-2018.firebaseio.com",
    projectId: "fleet-track-2018",
    storageBucket: "fleet-track-2018.appspot.com",
    messagingSenderId: "803513680370"
  };
  firebase.initializeApp(config);

  
/*firebase.initializeApp({
	serviceAccount:"./Fleet Track-9ce38581e4a3.json",
	databaseURL: "https://fleet-track-2018.firebaseio.com"
});
var message = {msg:"91-9913543593"};
var ref = firebase.database().ref().child('Registered')
var user = ref.push(message);
*/