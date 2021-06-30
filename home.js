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

var extra1;
var extra2;
var grade2 = "grade";
var checked = false;
var time = 0;
var times = [];
var numberofitems;
var avgy1 = 0;
var avgy2 = 0;
var nexto;
var checko;
var questy;
var easyrange;
var hardrange = 0;
var hardrange2 = 0;
var average_time_per_question;
var correct_questions = 0;
var incorrect_questions = 0;
var total_questions = 0;
var Percentage_correct_answers;
var quot;
var userremainder;
var difficulty = "";
var row = "";
var div = "";
var number_1 = "";
var number_2 = "";
var question = "";
var username = localStorage.getItem("Username");
var password = localStorage.getItem("Password");
var grade = localStorage.getItem("Grade");
var email = localStorage.getItem("Email");
var mouseup1 = 1;
var mouseup2 = 0;

if(email == null) {
    function getData() {firebase.database().ref("/" + username).on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        (childKey + " " + childData);
        if(childKey == "grade") {
            grade = childData;
        }

        if(childKey == "easyRange") {
            easyrange = childData;
        }

        if(childKey == "hardRange") {
            hardrange = childData;
        }

        if(childKey == "times") {
            times = childData;
        }

        if(childKey == "percentageOfCorrectAnswers") {
            Percentage_correct_answers = childData;
        }

        if(childKey == "totalQuestions") {
            total_questions = childData;

        }

        if(childKey == "correctQuestions") {
            correct_questions = childData;
        }

        if(childKey == "incorrectQuestions") {
            incorrect_questions = childData;
        }

        if(childKey == "averageTime") {
            average_time_per_question = childData;
        }
    });});}
    getData(); 
    ("correctly done " + grade);
}

else {
    if (grade == 1) {
        easyrange = 21;
        hardrange = 0;
    }

    if (grade == 2) {
        easyrange = 351;
        hardrange = 0;
    }

    if (grade == 3) {
        easyrange = 5001;
        hardrange = 20;
        hardrange2 = 5;
    }

    if (grade == 4) {
        easyrange = 100501;
        hardrange = 1051;
        hardrange2 = hardrange / 100;
    }

    if (grade == 5) {
        easyrange = 1050001;
        hardrange = 11100;
        hardrange2 = hardrange / 100;
    }

    if (grade == 6) {
        easyrange = 10050001;
        hardrange = 30000;
        hardrange2 = hardrange / 100;
    }

    if (grade == 7) {
        easyrange = 100050001;
        hardrange = 50000;
        hardrange2 = hardrange / 100;
    }

    if (grade == 8) {
        easyrange = 100050001;
        hardrange = 80000;
        hardrange2 = hardrange / 100;
    }

    firebase.database().ref("/").child(username).set({
        Password: password,
        grade: grade,
        email: email,
        easyRange: easyrange,
        hardRange: hardrange,
        totalQuestions: 0,
        correctQuestions: 0,
        incorrectQuestions: 0,
        averageTime: "",
        percentageOfCorrectAnswers: 0,
        times: times
    });
}

document.getElementById("Name").innerHTML = username + "!";
(username);

if((grade == 1) || (grade == 2)) {
    document.getElementById("buttons").innerHTML = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Stats</button>&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>';
}

else {
    document.getElementById("buttons").innerHTML = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Stats</button>&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>&nbsp;<button id="Multiplication" class="btn btn-primary" onclick="Practice(this.id);">Multiplication</button>&nbsp;<button id="Division" class="btn btn-primary" onclick="Practice(this.id);">Division</button></div>';
}

function Practice(oper) {
    document.getElementById("title").innerHTML = "Practice | The Math App"
    header = "<h3>What do you want to practice today?</h3>";
    if((grade == 1) || (grade == 2)) {
        buttons = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Statistics</button>&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>';
    }

    else {
        buttons = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Statistics</button>&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>&nbsp;<button id="Multiplication" class="btn btn-primary" onclick="Practice(this.id);">Multiplication</button>&nbsp;<button id="Division" class="btn btn-primary" onclick="Practice(this.id);">Division</button></div>';
    }
    mini_screen = '<div id="mini_screen"><h3 id="question"></h3><br><input id="answer" class="form_control" placeholder="Type your answer" type="number"><br><br><button id="check_button" class="btn btn-success check" onclick="check(' + oper + ');">Check Your Answer</button><br><button id="next_button" class="next btn btn-success" onclick="Next('+ oper +')">Next Question</button></div>';
    if(oper == "Division") {
        if((grade == 6) || (grade == 7) || (grade == 8)) {
            ("jeeeeeeeeeee");
            mini_screen = '<div id="mini_screen"><h3 id="question"></h3><br><input id="answer" class="form_control" placeholder="Type the quotient" type="number"><br><br><button id="check_button" class="btn btn-success check" onclick="check(' + oper + ');">Check Your Answer</button><br><button id="next_button" class="next btn btn-success" onclick="Next('+ oper +')">Next Question</button><br><br><h5 id="note" class="text-muted">Note: Round the number to 3 decimal digits</h5><br><br></div>';
        }

        else {
            ("jiiiiiiiii");
            mini_screen = '<div id="mini_screen"><h3 id="question"></h3><br><input id="answer" class="form_control" placeholder="Type the quotient" type="number"><br><br><input id="remainder" class="form_control" placeholder="Type the remainder" type="number"><br><br><button id="check_button" class="btn btn-success check" onclick="check(' + oper + ');">Check Your Answer</button><button id="next_button" class="next btn btn-success" onclick="Next('+ oper +')">Next Question</button></div>';
        }
    }
    div = header + buttons + mini_screen;
    document.getElementById("main_div").innerHTML = div;
    document.getElementById("next_button").style.display = "none";
    document.getElementById("check_button").style.display = "block";
    document.getElementById("next_button").disabled = true;
    document.getElementById("next_button").disabled = false;
    question = document.getElementById("question");
    if(oper == "Addition") {
        add();
    }

    if(oper == "Subtraction") {
        subtract();
    }

    if(oper == "Multiplication") {
        multiply();
    }

    if(oper == "Division") {
        divide(grade);
    }
}

function Stats() {
    stats = '<br><h4 class="btn btn-secondary">Total Questions: <span class="var" id="totquest"></span></h4><br><h4 class="btn btn-secondary">Correct Questions: <span class="var" id="corquest"></span></h4><br><h4 class="btn btn-secondary">Incorrect Questions: <span class="var" id="incorquest"></span></h4><br><h4 class="btn btn-secondary">Average Time: <span class="var" id="avgtime"></span></h4><br><h4 class="btn btn-secondary">Percentage of Correct Answers: <span class="var" id="percocoans"></span></h4>';
    header = "<h3>What do you want to practice today?</h3>";
    if((grade == 1) || (grade == 2)) {
        buttons = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Statistics</button>&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>';
    }

    else {
        buttons = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Statistics</button>&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>&nbsp;<button id="Multiplication" class="btn btn-primary" onclick="Practice(this.id);">Multiplication</button>&nbsp;<button id="Division" class="btn btn-primary" onclick="Practice(this.id);">Division</button></div>';
    }
    div = header + buttons + stats;

    if(total_questions == 0) {
        document.getElementById("main_div").innerHTML = div;
        document.getElementById("totquest").innerHTML = 0;
        document.getElementById("corquest").innerHTML = 0;
        document.getElementById("incorquest").innerHTML = 0;
        document.getElementById("avgtime").innerHTML = 0;
        document.getElementById("percocoans").innerHTML = 0;
    }

    else {
        document.getElementById("main_div").innerHTML = div;
        document.getElementById("totquest").innerHTML = total_questions;
        document.getElementById("corquest").innerHTML = correct_questions;
        document.getElementById("incorquest").innerHTML = incorrect_questions;
        document.getElementById("avgtime").innerHTML = average_time_per_question + " seconds";
        document.getElementById("percocoans").innerHTML = Percentage_correct_answers + "%";
    }
}

function check(oper) {
    questy = document.getElementById("question").innerText;
    useranswer = document.getElementById("answer").value;

    if(useranswer == "") {
        document.getElementById("question").innerText = "Answer is not valid";
        document.getElementById("question").style.color = "red";
        setTimeout(function() {
            document.getElementById("question").innerText = questy;
            document.getElementById("question").style.color = "white";
        }, 800);
    }

    else {
        if(oper.id == "Division") {
                if(((grade == 6) || (grade == 7) || (grade == 8))) {
                    if(useranswer == answer) {
                        document.getElementById("question").innerText = "Correct!";
                        document.getElementById("answer").className = "form-control btn-success";
                        document.getElementById("check_button").style.display = "none";
                        document.getElementById("check_button").disabled = true;
                        document.getElementById("next_button").style.display = "block";
                        document.getElementById("next_button").disabled = false;
                        correct_questions = correct_questions + 1;
                        total_questions = total_questions + 1;
                        checked = true;
                    }
                
                    else {
                        document.getElementById("question").innerHTML = "Incorrect. The answer is " + answer;
                        document.getElementById("answer").className = "form-control btn-danger";
                        document.getElementById("check_button").style.display = "none";
                        document.getElementById("check_button").disabled = true;
                        document.getElementById("next_button").style.display = "block";
                        document.getElementById("next_button").disabled = false;
                        incorrect_questions = incorrect_questions + 1;
                        total_questions = total_questions + 1;
                        checked = true;
                    }
                }
        
                else {
                    userremainder = document.getElementById("remainder").value;
                    if((useranswer == answer) && (userremainder == remainder)) {
                        document.getElementById("question").innerHTML = "Correct!";
                        document.getElementById("answer").className = "form-control btn-success";
                        document.getElementById("quotient").className = "form-control btn-success";
                        document.getElementById("check_button").style.display = "none";
                        document.getElementById("check_button").disabled = true;
                        document.getElementById("next_button").style.display = "block";
                        document.getElementById("next_button").disabled = false;
                        correct_questions = correct_questions + 1;
                        total_questions = total_questions + 1;
                        checked = true;
                    }
        
                else {
                    document.getElementById("question").innerHTML = "Incorrect. The answer is Quotient: " + answer + ", Remainder: " + remainder;
                    document.getElementById("quotient").className = "form-control btn-danger";
                    document.getElementById("remainder").className = "form-control btn-danger";
                    document.getElementById("check_button").style.display = "none";
                    document.getElementById("check_button").disabled = true;
                    document.getElementById("next_button").style.display = "block";
                    document.getElementById("next_button").disabled = false;
                    incorrect_questions = incorrect_questions + 1;
                    total_questions = total_questions + 1;
                    checked = true;
                }
            }
        }
    
        else {
            useranswer = document.getElementById("answer").value;
            if(useranswer == undefined) {
                document.getElementById("question").innerHTML = "Answer is not valid";
                setTimeout(function() {
                    document.getElementById("question").innerHTML = questy;
                }, 300);
            }
    
            else {
                if(useranswer == answer) {
                    document.getElementById("question").innerHTML = "Correct!";
                    document.getElementById("answer").className = "form-control btn-success";
                    document.getElementById("check_button").style.display = "none";
                    document.getElementById("check_button").disabled = true;
                    document.getElementById("next_button").style.display = "block";
                    document.getElementById("next_button").disabled = false;
                    (document.getElementById("next_button").disabled);
                    correct_questions = correct_questions + 1;
                    total_questions = total_questions + 1;
                    checked = true;
                }
            
                else {
                    document.getElementById("question").innerHTML = "Incorrect. The answer is " + answer;
                    document.getElementById("answer").className = "form-control btn-danger";
                    document.getElementById("check_button").style.display = "none";
                    document.getElementById("check_button").disabled = true;
                    document.getElementById("next_button").style.display = "block";
                    document.getElementById("next_button").disabled = false;
                    (document.getElementById("next_button").disabled);
                    incorrect_questions = incorrect_questions + 1;
                    total_questions = total_questions + 1;
                    checked = true;
                }
            }
        }
    }
}

function Next(operati) {
    header = "<h3>What do you want to practice today?</h3>";
    buttons = '<div id="buttons"><button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>&nbsp;<button id="Multiplication" class="btn btn-primary" onclick="Practice(this.id);">Multiplication</button>&nbsp;<button id="Division" class="btn btn-primary" onclick="Practice(this.id);">Division</button></div>';
    mini_screen = '<div id="mini_screen"><h3 id="question"></h3><br><input id="answer" class="form_control" placeholder="Type your answer" type="number"><br><br><button id="check_button" class="btn btn-success" onclick="check();">Check Your Answer</button></div>';
    div = header + buttons + mini_screen;
    document.getElementById("main_div").innerHTML = div;
    document.getElementById(operati.id).click();
    document.getElementById("next_button").style.display = "none";
    document.getElementById("next_button").disabled = true;
    document.getElementById("check_button").style.display = "block";
    document.getElementById("check_button").disabled = false;
}

function multiply() {
    number_1 = Math.floor(Math.random() * hardrange);
    number_2 = Math.floor(Math.random() * hardrange);
    answer = number_1 * number_2;
    question.innerHTML = "What is " + number_1 + " x " + number_2 + " ?";
    checked = false;
    caltime();
}

function divide(grd) {
    if(grade == 1 || grade == 2 || grade == 3) {
        if(grade == 1) {
            hardrange2 = 2;
        }

        if (grade == 2){
            hardrange2 = 5;
        }

        else {
            hardrange2 = 15;
        }
    }

    else {
        hardrange2 = hardrange / 100;
    }

    number_1 = Math.floor(Math.random() * hardrange);
    number_2 = Math.floor(Math.random() * hardrange2);
    if(number_1 > number_2) {
        (hardrange2);
        divanswer = number_1 / number_2;
        if((grd == 6) || (grd == 7) || (grd == 8)) {
            answer = divanswer.toFixed(3);
            question.innerHTML = "What is " + number_1 + " ÷ " + number_2 + " ?";
        }

        else {
            answer = Math.trunc(divanswer);
            extra2 = answer * number_2;
            remainder = number_1 - extra2;
            question.innerHTML = "What is " + number_1 + " ÷ " + number_2 + " ?";
        }
        checked = false;
        caltime();
    } 

    else {
        divide(grd)
    }    
}

function subtract() {
    number_1 = Math.floor(Math.random() * easyrange);
    number_2 = Math.floor(Math.random() * easyrange);
    if(number_1 > number_2) {
        answer = number_1 - number_2;
        question.innerHTML = "What is " + number_1 + " - " + number_2 + " ?";
        checked = false;
        caltime();
    }

    else {
        subtract();
    }
}

function add() {
    number_1 = Math.floor(Math.random() * easyrange);
    number_2 = Math.floor(Math.random() * easyrange);
    answer = number_1 + number_2;
    question.innerHTML = "What is " + number_1 + " + " + number_2 + " ?";
    checked = false;
    caltime();
}

function caltime() {
    if(checked == false) {
        setTimeout(caltime, 10);
        time = Number(time) + 0.01;
    }    

    else {
        time = time.toFixed(2);
        times.push(Number(time));
        var length = times.length - 1;
        for(i = 0; i <= length; i++) {
            localStorage.setItem("i", i)
            var item = localStorage.getItem("i");
            avgy1 = avgy1 + times[item];
        }
        avgy2 = times.length;
        average_time_per_question = avgy1 / avgy2;
        average_time_per_question = average_time_per_question.toFixed(1);
        if(correct_questions != 0) {
            Percentage_correct_answers = correct_questions / total_questions * 100;
        }

        else {
            Percentage_correct_answers = 0;
        }

        firebase.database().ref("/" + username).update({
            percentageOfCorrectAnswers: Percentage_correct_answers,
            correctQuestions: correct_questions,
            incorrectQuestions: incorrect_questions,
            totalQuestions: total_questions,
            averageTime: average_time_per_question,
            times: times
        });                     

        time = 0;
        avgy1 = 0
        avgy2 = 0;
    }
}