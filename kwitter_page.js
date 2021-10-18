//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyA7GC4Sn6HjDP5UbQdI1A6mbVKrkI0PGWs",
      authDomain: "yaitzjhonny.firebaseapp.com",
      databaseURL: "https://yaitzjhonny-default-rtdb.firebaseio.com",
      projectId: "yaitzjhonny",
      storageBucket: "yaitzjhonny.appspot.com",
      messagingSenderId: "95366217947",
      appId: "1:95366217947:web:42137306e4cf8dc12d4cfe"
    };

    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

    function logoutJhonny() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location.replace("index.html");
}
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message:msg,
            like:0
      });
      document.getElementById("msg").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
firebase_message_id = childKey;
message_data = childData;
name = message_data['name'];
message = message_data['message'];
like = like_data['like'];
name_tick = "<h4>"+name+"<img src= 'tick.png' class= 'tick'></h4>";
msg = "<h4 class='msg_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-success' id="+firebase_message_id+"value="+like+"onclick= 'update_like(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><br>";
row = name_tick + msg + like_button + span_with_tag; 
document.getElementById("output").innerHTML += row;
} });  }); }
//End code
getData();

function update_like(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).ariaValueMax;
      updated_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like : update_like
      });
}
