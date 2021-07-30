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
var username;
var password;

var childKey = "";
var childData = "";
var usernameInDatabase = false;
var correct_passwordy = "";

var height = screen.height;
var width = screen.width;
console.log(height);
console.log(width);

if(width < 782) {
    document.getElementById("First_div").style.width = "0%";
    document.getElementById("First_div").style.height = "0%";
    document.getElementById("First_div").innerHTML = "";
    document.getElementById("First_div").style.backgroundColor = "lightblue";
    document.getElementById("Second_div").style.width = "100%";
    console.log('This is RUNNING');
}

window.addEventListener("keydown", keypressed);

function keypressed(e) {
    keypressedcode = e.keyCode;

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(keypressedcode == "13") {
        if(username != "") {
            document.getElementById("password").focus();
        }

        if(password != "") {
            login();
            console.log("WORKING");
        }
    }
}

function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
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
            console.log("WORKING");
            function getData2() {firebase.database().ref("/").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                console.log(childSnapshot);
                console.log("Childkey:" + childKey + " Username:" + username + " ChildData:" + childData);
                if(childKey == username) {
                    console.log("WORKING");
                    function getData() {firebase.database().ref("/" + username).on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
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
                                console.log("WORKING");
                                localStorage.setItem("Username", username);
                                localStorage.removeItem("Grade");
                                localStorage.removeItem("Email");
                                window.location = "home.html";
                            }
                        
                            else {
                                document.getElementById("error").innerHTML = "Incorrect Username/Password";
                                setTimeout(incorrect, 100);
                                times = times + 1;
                                console.log("Here I am");
                                console.log(correctpassword);
                                console.log(password);
                                }
                            }
                        });
                    });}
                        getData();
                    }
                else {
                    document.getElementById("loadimg").src = "loading icon.gif";
                    setTimeout(
                        function() {
                            document.getElementById("error").innerText = "Incorrect Username/Password";
                            document.getElementById("loadimg").style.width = "0px";
                        }, 600);
                }
            });});}
            getData2();
        }
    }

    else {
        document.getElementById("error").innerHTML = "Incorrect Password typed too many times";
    }
}

function incorrect() {
    setTimeout(document.getElementById("error").innerHTML = "Incorrect Password", 500);
}
