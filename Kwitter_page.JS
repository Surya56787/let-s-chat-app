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
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val();
    if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
   } });  }); }
getData();

function send(){
msg=document.getElementById("message").value;
firebase.database().ref(room_name).push({
   name:user_name,
   message:msg, 
   like:0
});
document.getElementById("message").value="";
}

function logout(){
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
   window.location="index.html";
}