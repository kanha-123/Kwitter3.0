

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF6UKeim73-CrtziTKdZcq6N8jcAJojVE",
    authDomain: "kwitter-efe80.firebaseapp.com",
    databaseURL: "https://kwitter-efe80-default-rtdb.firebaseio.com",
    projectId: "kwitter-efe80",
    storageBucket: "kwitter-efe80.appspot.com",
    messagingSenderId: "1062450142353",
    appId: "1:1062450142353:web:c7c448fca0faccd3647330",
    measurementId: "G-QWWJHK0NDB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();