
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDQb7_ep0iBtDGWVSKAV9ctMphBp0Phy-g",
      authDomain: "kwitter-dfa4b.firebaseapp.com",
      databaseURL: "https://kwitter-dfa4b-default-rtdb.firebaseio.com",
      projectId: "kwitter-dfa4b",
      storageBucket: "kwitter-dfa4b.appspot.com",
      messagingSenderId: "228931856940",
      appId: "1:228931856940:web:a73edf0c0074508710bf89",
      measurementId: "G-ML2MXN5YYC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
