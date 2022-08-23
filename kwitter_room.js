


var firebaseConfig = {
  apiKey: "AIzaSyDgsePKC9Kj-2wamyPbv3esst2XeArkTyM",
  authDomain: "c93-97-22cfd.firebaseapp.com",
  databaseURL: "https://c93-97-22cfd-default-rtdb.firebaseio.com",
  projectId: "c93-97-22cfd",
  storageBucket: "c93-97-22cfd.appspot.com",
  messagingSenderId: "193723579181",
  appId: "1:193723579181:web:2f6a4c2d1ebee5b530f1a4"
};

firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room names " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick = 'redirecttoRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


});});}
getData();



function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"

});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirecttoRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}



