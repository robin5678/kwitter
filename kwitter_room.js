
   var firebaseConfig = {
      apiKey: "AIzaSyDPUHAjPSeZ4_daqAo0ikBb6mR4dccQNPs",
      authDomain: "kwitter-712bf.firebaseapp.com",
      databaseURL: "https://kwitter-712bf.firebaseio.com",
      projectId: "kwitter-712bf",
      storageBucket: "kwitter-712bf.appspot.com",
      messagingSenderId: "225197616578",
      appId: "1:225197616578:web:d8b75691df20489a33fa5b",
      measurementId: "G-V1DV6EC164"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+" "+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location=("kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value',

function(snapshot) {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname"+Room_names)
       row="<div class='room_name' id= "+Room_names+"onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>"
      //Start code
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(){
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location=("kwitter_page.html");
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location=("kwitter.html");
}