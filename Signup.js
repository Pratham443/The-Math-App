// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var height = screen.height;
var width = screen.width;
console.log(height);
console.log(width);

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
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confpassword = document.getElementById("passwordverify").value;
    var grade = document.getElementById("grade").value;
    var email = document.getElementById("email").value;
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
        if((grade >= 1) && (grade <= 8)) {
            if(password == confpassword) {
                if(validateEmail(email)) {
                    localStorage.setItem("Username", username);
                    localStorage.setItem("Password", password);
                    localStorage.setItem("Grade", grade);
                    localStorage.setItem("Email", email);
                    window.location = "home.html";
                            
                    Email.send(
                        "smtp.elasticemail.com",
                        "prathurk01@gmail.com",
                        "262C45C1E7C157B88A6AC87B98EF2CB418A8",
                        "prabagowda@gmail.com",
                        "prathurk01@gmail.com",
                        "Your account has been successfully created on The Math App",
                        "Your account has been successfully created on The Math App. Hope you like it!"
                    ).then(
                        message => alert(message)
                    );  
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