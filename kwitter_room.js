// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7GC4Sn6HjDP5UbQdI1A6mbVKrkI0PGWs",
    authDomain: "yaitzjhonny.firebaseapp.com",
    databaseURL: "https://yaitzjhonny-default-rtdb.firebaseio.com",
    projectId: "yaitzjhonny",
    storageBucket: "yaitzjhonny.appspot.com",
    messagingSenderId: "95366217947",
    appId: "1:95366217947:web:42137306e4cf8dc12d4cfe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
