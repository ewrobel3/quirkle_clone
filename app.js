
//Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUUCX0vvKXT3g-H_z7B2-7iz2kNt2Yg38",
    authDomain: "quirkle-clone.firebaseapp.com",
    databaseURL: "https://quirkle-clone-default-rtdb.firebaseio.com",
    projectId: "quirkle-clone",
    storageBucket: "quirkle-clone.appspot.com",
    messagingSenderId: "668125335682",
    appId: "1:668125335682:web:9006c4fc27379730b4649b"
  };
  
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

let username = document.getElementById("username");
let gamecode = document.getElementById("gamecode");
let startbutton = document.getElementById("startbutton");

document.addEventListener('keypress', function(e) {
    if(e.key == "Enter") {
        if(username == "" || gamecode == ""){
            //send error message
        }
        else {
            database.ref("users").push({
                gamecode: gamecode.value,
                username: username.value
            })
        }
    }
})

document.addEventListener('click', function(e){
    database.ref("users").push({
        gamecode: gamecode.value,
        username: username.value
    })
})