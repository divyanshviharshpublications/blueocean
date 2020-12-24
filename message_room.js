var firebaseConfig = {
    apiKey: "AIzaSyCUCi4l0W3T7SaDpEfosjA3_N5JngCQS7U",
    authDomain: "caller-80521.firebaseapp.com",
    databaseURL: "https://caller-80521.firebaseio.com",
    projectId: "caller-80521",
    storageBucket: "caller-80521.appspot.com",
    messagingSenderId: "626723456766",
    appId: "1:626723456766:web:d2af7717af6f9f8cf6c7af",
    measurementId: "G-Z2CLLN9Z51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "message_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "message_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
