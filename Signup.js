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

var height = screen.height;
var width = screen.width;
var username;
var password;
var confpassword;
var grade;
var email;
var keypressedcode;
var username2;
var email2;

console.log(height);
console.log(width);

window.addEventListener("keydown", keypressed);

function keypressed(e) {
    keypressedcode = e.keyCode;

    if(keypressedcode == "13") {
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;
        confpassword = document.getElementById("passwordverify").value;
        grade = document.getElementById("grade").value;
        email = document.getElementById("email").value;

        console.log(username + " " + password + " " + confpassword + " " + grade + " " + email);

        if(email != "") {
            console.log("WORKING");
            document.getElementById("username").focus();
        }

        if(username != "") {
            console.log("WORKING");
            document.getElementById("password").focus();
        }

        if(password != "") {
            console.log("WORKING");
            document.getElementById("passwordverify").focus();
        }

        if(confpassword != "") {
            console.log("WORKING");
            signup();
        }
    }
}

if(width < 782) {
    document.getElementById("First_div").style.width = "0%";
    document.getElementById("First_div").innerHTML = "";
    document.getElementById("First_div").style.backgroundColor = "lightblue";
    document.getElementById("Second_div").style.width = "100%";
    console.log('This is RUNNING');
}

function validateEmail(emaily) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emaily).toLowerCase());
  }

function signup() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    confpassword = document.getElementById("passwordverify").value;
    grade = document.getElementById("grade").value;
    email = document.getElementById("email").value;
    console.log(grade);
    if((email == "") || (username == "") || (password == "") || (confpassword == "") || (grade == "")) {
        if (email == "") {
            document.getElementById("error").innerHTML = "Email is not filled";
            document.getElementById("email").className = "btn-danger form-control";
        }

        if (username == "") {
            document.getElementById("error").innerHTML = "Username is not filled";
            document.getElementById("username").className = "btn-danger form-control";
        }

        if (password == "") {
            document.getElementById("error").innerHTML = "Password is not filled";
            document.getElementById("password").className = "btn-danger form-control";
        }

        if (confpassword == "") {
            document.getElementById("error").innerHTML = "Password not confirmed";
            document.getElementById("confpassword").className = "btn-danger form-control";
        }

        if (grade == "") {
            document.getElementById("error").innerHTML = "Grade is not filled";
            document.getElementById("grade").className = "btn-danger form-control";
        }
    }

    else {
        function getData() {firebase.database().ref("/").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            username2 = childKey;

            function getData2() {firebase.database().ref(username2).on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
                childKey2 = childSnapshot.key;
                childData2 = childSnapshot.val();
                if(childKey2 == "email") {
                    email2 = childData2;
                    console.log(email2);

                    if((childKey == username) || (email2 == email)) {
                        if(childKey == username) {
                            document.getElementById("error").innerHTML = "Someone already has taken the username '" + username + "'";
                        }

                        else {
                            document.getElementById("error").innerHTML = "Someone already has used the email '" + email + "'";
                        }
                    }
        
                    else {
                        if((grade >= 1) && (grade <= 8)) {
                            if(password == confpassword) {
                                if(validateEmail(email)) {
                                    console.log("SIGNUP REACHED 140");
                                    localStorage.setItem("Username", username);
                                    localStorage.setItem("Password", password);
                                    localStorage.setItem("Grade", grade);
                                    localStorage.setItem("Email", email);
                                    window.location = "home.html";
                                            
                                    Email.send({
                                        Host: "smtp.elasticemail.com",
                                        Username: "prathurk01@gmail.com",
                                        Password: "262C45C1E7C157B88A6AC87B98EF2CB418A8",
                                        To: "prabagowda@gmail.com",
                                        From: "prathurk01@gmail.com",
                                        Subject: "Your account has been successfully created on The Math App",
                                        Body: "Your account has been successfully created on The Math App. Hope you like it!"
                                    }).then(
                                        message => alert(message)
                                    );  
                
                                    localStorage.setItem("Promise", Promise);
                                }
                
                                else {
                                    document.getElementById("error").innerText = "Email not valid";
                                }
                            }   
                
                            else {
                                document.getElementById("passwordverify").className = "btn-danger form-control";
                                document.getElementById("error").innerHTML = "Passwords don't match";
                            }
                        }
                
                        else {
                            document.getElementById("error").innerText = "Grade should be between 1 and 8";
                        }
                    }
                }
            });});}
            getData2();
        });});}
        getData();
    }
}