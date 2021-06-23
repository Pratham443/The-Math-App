// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAwuUmKdjlV9dzq299LEsI8yv2W_-lk3kQ",
    authDomain: "the-math-app-b57d5.firebaseapp.com",
    databaseURL: "https://the-math-app-b57d5-default-rtdb.firebaseio.com",
    projectId: "the-math-app-b57d5",
    storageBucket: "the-math-app-b57d5.appspot.com",
    messagingSenderId: "610394034620",
    appId: "1:610394034620:web:d94aa344ffa10185a61bb9",
    measurementId: "G-BYW44W7M9D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var Users2 = "";
var correctpassword = "";
var times = 0;

var childKey = "";
var childData = "";
var correct_passwordy = "";


function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("My password" + password);


    console.log(times + "!!!!");
    if(times <=3) {
        
        if((username == "") || (password == "")) {
            if(username = "") {
                document.getElementById("error").innerHTML = "Username is not filled";
                document.getElementById("username").className = "btn-danger form-control";
            }
    
            if (password == "") {
                document.getElementById("error").innerHTML = "Password is not filled";
                document.getElementById("password").className = "btn-danger form-control";
            }
        }
        
        else {
            function getData() {firebase.database().ref(username).once('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key; 
                console.log(childSnapshot);
                console.log(childKey);
                childData = childSnapshot.val();
                if(childKey == "Password") {
                    correctpassword = childData;
                    correct_passwordy = childData;
                    console.log(correctpassword);
                    console.log(childData);

                    if(correctpassword == password) {
                        localStorage.setItem("Username", username);
                        localStorage.removeItem("Grade");
                        localStorage.removeItem("Email");
                        window.location = "home.html";
                    }
            
                    else {
                        document.getElementById("error").innerHTML = "";
                        setTimeout(incorrect, 100);
                        times = times + 1;
                        console.log("Here I am");
                        console.log(correctpassword);
                        console.log(password);
                    }
                }
            });});}
            getData();
        }
    }

    else {
        document.getElementById("error").innerHTML = "Incorrect Password typed too many times";
    }
}

function incorrect() {
    setTimeout(document.getElementById("error").innerHTML = "Incorrect Password", 500);
}