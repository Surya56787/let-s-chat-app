var firebaseConfig = {
      apiKey: "AIzaSyAjMJZSPTz83nwlAN3hECpqdf2xmIRdGxw",
      authDomain: "let-s-chat-app-7f840.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-7f840-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-7f840",
      storageBucket: "let-s-chat-app-7f840.appspot.com",
      messagingSenderId: "997783046639",
      appId: "1:997783046639:web:5e7f0cd0039223d11e4e1a"
    };
    
     firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
      console.log("room name-"+ Room_names);
      row="<div class='room_name' id="+ Room_names+ " onclick='redirect_to_room_name(this.id)' >#"+ Room_names+ "</div> <hr>";
      document.getElementById("output").innerHTML += row;
     });});}
getData();

function AddRoom(){
      room_name=document.getElementById("room_name");
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="Kwitter_page.html";
}

function redirect_to_room_name(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="Kwitter_page.html";
}

function Logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}