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
var oper;
var statsclick = false;
var keypressedcode;
var header = "<h3>What do you want to practice today?</h3>";
var buttons;
var stats = '<br><h4 class="btn btn-secondary">Total Questions: <span class="var" id="totquest"></span></h4><br><h4 class="btn btn-secondary">Correct Questions: <span class="var" id="corquest"></span></h4><br><h4 class="btn btn-secondary">Incorrect Questions: <span class="var" id="incorquest"></span></h4><br><h4 class="btn btn-secondary">Average Time: <span class="var" id="avgtime"></span></h4><br><br><h4 id="piechartheader">Percentage of Correct and Incorrect Answers</h4><div id="piechart"></div>';
var settings = '';
var playmusic = true;
var playsound = true;
var minutes = 0;
var showabletime = 0;
var showabletime2 = 0;
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
var correct_sound = new Audio("correct sound.wav");
var incorrect_sound = new Audio("incorrect sound.wav");
var background_sound = new Audio("Background music.wav");
background_sound.volume = 0;

console.log(email);

if(playmusic == true) {
    if (typeof background_sound.loop == 'boolean') {
        background_sound.loop = true;
    }
    else {
        background_sound.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    background_sound.play();
}

if(email == null) {
    function getData() {firebase.database().ref("/" + username).on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if(childKey == "grade") {
            grade = childData;
            console.log(grade);
            if((grade == 1) || (grade == 2)) {
                buttons = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Statistics</button>&nbsp;&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>';
                document.getElementById("buttons").innerHTML = buttons;
            }
        
            else {
                buttons = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Statistics</button>&nbsp;&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>&nbsp;&nbsp;<button id="Multiplication" class="btn btn-primary" onclick="Practice(this.id);">Multiplication</button>&nbsp;&nbsp;<button id="Division" class="btn btn-primary" onclick="Practice(this.id);">Division</button></div>';
                document.getElementById("buttons").innerHTML = buttons;
            }
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

        if(childKey == "playMusic") {
            playmusic = childData;
        }

        if(childKey == "playSound") {
            playsound = childData;
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

    if((grade == 1) || (grade == 2)) {
        buttons = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Statistics</button>&nbsp;&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>';
        document.getElementById("buttons").innerHTML = buttons;
    }

    else {
        buttons = '<div id="buttons"><button id="Stats" class="btn btn-primary" onclick="Stats()">Statistics</button>&nbsp;&nbsp;<button id="Addition" class="btn btn-primary" onclick="Practice(this.id);">Addition</button>&nbsp;&nbsp;<button class="btn btn-primary" id="Subtraction" onclick="Practice(this.id);">Subtraction</button>&nbsp;&nbsp;<button id="Multiplication" class="btn btn-primary" onclick="Practice(this.id);">Multiplication</button>&nbsp;&nbsp;<button id="Division" class="btn btn-primary" onclick="Practice(this.id);">Division</button></div>';
        document.getElementById("buttons").innerHTML = buttons;
    }

    firebase.database().ref("/").child(username).update({
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
        times: times,
        playMusic: playmusic,
        playSound: playsound
    });
}

document.getElementById("Name").innerHTML = username + "!";

function Practice(operi) {
    oper = operi;
    document.getElementById("title").innerHTML = "Practice | The Math App"
    mini_screen = '<div id="mini_screen"><h3 id="question"></h3><br><input id="answer" class="form-control" placeholder="Type your answer" type="number"><br><br><button id="check_button" class="btn btn-success check" onclick="check(' + oper + ');">Check Your Answer</button><br><button id="next_button" class="next btn btn-success" onclick="Next('+ oper +')">Next Question</button><span id="timerspan"><img id="timer" src="timer.png" class="img-responsive"><h5 id="time">00:00</h5</span></div>';
    if(oper == "Division") {
        if((grade == 6) || (grade == 7) || (grade == 8)) {
            ("jeeeeeeeeeee");
            mini_screen = '<div id="mini_screen"><h3 id="question"></h3><br><input id="answer" class="form-control" placeholder="Type the quotient" type="number"><br><br><button id="check_button" class="btn btn-success check" onclick="check(' + oper + ');">Check Your Answer</button><br><button id="next_button" class="next btn btn-success" onclick="Next('+ oper +')">Next Question</button><br><br><h5 id="note" class="text-muted">Note: Round the number to 3 decimal digits</h5><br><br><span id="timerspan"><img id="timer" src="timer.png" class="img-responsive"><h5 id="time">00:00</h5</span></div>';
        }

        else {
            ("jiiiiiiiii");
            mini_screen = '<div id="mini_screen"><h3 id="question"></h3><br><input id="answer" class="form-control" placeholder="Type the quotient" type="number"><br><br><input id="remainder" class="form-control" placeholder="Type the remainder" type="number"><br><br><button id="check_button" class="btn btn-success check" onclick="check(' + oper + ');">Check Your Answer</button><button id="next_button" class="next btn btn-success" onclick="Next('+ oper +')">Next Question</button><span id="timerspan"><img id="timer" src="timer.png" class="img-responsive"><h5 id="time">00:00</h5</span></div>';
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
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    div = header + buttons + stats;
    statsclick = true;

    if(total_questions == 0) {
        document.getElementById("main_div").innerHTML = div;
        document.getElementById("totquest").innerHTML = 0;
        document.getElementById("corquest").innerHTML = 0;
        document.getElementById("incorquest").innerHTML = 0;
        document.getElementById("avgtime").innerHTML = 0;
    }

    else {
        document.getElementById("main_div").innerHTML = div;
        document.getElementById("totquest").innerHTML = total_questions;
        document.getElementById("corquest").innerHTML = correct_questions;
        document.getElementById("incorquest").innerHTML = incorrect_questions;
        document.getElementById("avgtime").innerHTML = average_time_per_question + " seconds";
    }
}

function check() {
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
        console.log(oper);
        if(oper == "Division") {
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
                        correct_sound.play();
                    }
                
                    else {
                        console.log("This is working till now");
                        document.getElementById("question").innerHTML = "Incorrect. The answer is " + answer;
                        document.getElementById("answer").className = "form-control btn-danger";
                        document.getElementById("check_button").style.display = "none";
                        document.getElementById("check_button").disabled = true;
                        document.getElementById("next_button").style.display = "block";
                        document.getElementById("next_button").disabled = false;
                        incorrect_questions = incorrect_questions + 1;
                        total_questions = total_questions + 1;
                        checked = true;
                        incorrect_sound.play();
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
                        correct_sound.play();
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
                    incorrect_sound.play();
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
                    correct_questions = correct_questions + 1;
                    total_questions = total_questions + 1;
                    checked = true;
                    correct_sound.play();
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
                    incorrect_sound.play();
                }
            }
        }
    }
}

function Next(operati) {
    header = "<h3>What do you want to practice today?</h3>";
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
    window.addEventListener("keydown", keypressed);
    statsclick = false;
    caltime();
    time = 0;
    avgy1 = 0
    avgy2 = 0;
    minutes = 0;
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
        window.addEventListener("keydown", keypressed);
        statsclick = false;
        caltime();
        time = 0;
        avgy1 = 0
        avgy2 = 0;
        minutes = 0;
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
        window.addEventListener("keydown", keypressed);
        statsclick = false;
        caltime();
        time = 0;
        avgy1 = 0
        avgy2 = 0;
        minutes = 0;
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
    statsclick = false;
    caltime();
    window.addEventListener("keydown", keypressed);
    time = 0;
    avgy1 = 0
    avgy2 = 0;
    minutes = 0;
}

function caltime() {
    if(statsclick == false) {
        if(checked == false) {
            setTimeout(caltime, 10);
            console.log(time);
            time = Number(time) + 0.01;
            console.log(time);
            showabletime = Math.round(time);
            console.log(showabletime);
            if(showabletime >= 60) {
                console.log(showabletime);
                console.log(showabletime / 60);
                minutes = Math.round(showabletime / 60) + minutes;
                console.log(minutes);
                time = 0;
                if(minutes >= 10) {
                    console.log("minutes is more than 10");
                    showabletime2 = minutes + ":00";
                    document.getElementById("time").innerText = showabletime2;
                }
    
                else {
                    console.log("minutes is less than 10");
                    showabletime2 = "0" + minutes + ":00";
                    document.getElementById("time").innerText = showabletime2;
                }
            }
    
            else {
                console.log("This is WORKING SHOWABLE TIME = " + showabletime)
                if(showabletime >= 10) {
                    showabletime2 = "0" + minutes + ":" + showabletime;
                    document.getElementById("time").innerText = showabletime2;
                }
    
                else {
                    console.log("This is WORKING SECOND SHOWABLE TIME= " + showabletime);
                    showabletime2 = "0" + minutes + ":0" + showabletime;
                    document.getElementById("time").innerText = showabletime2;
                }
            }
        }    
    
        else {
            time = time + minutes * 60;
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
    
            firebase.database().ref("/").child(username).update({
                percentageOfCorrectAnswers: Percentage_correct_answers,
                correctQuestions: correct_questions,
                incorrectQuestions: incorrect_questions,
                totalQuestions: total_questions,
                averageTime: average_time_per_question,
                times: times
            });                     
        }
    }
}

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Correct Answers', correct_questions],
        ['Incorrect Answers', incorrect_questions],
    ]);

    var options = {
        height: 150,
        backgroundColor: 'skyblue',
        titleTextStyle: {color: "white"},
        titlePosition: "none",
        is3D: true,
        colors: ["green", "red"],
        legend: {
            position: "labeled",
            textStyle: {
                color:"white"
            }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
} 

function Settings() {
    document.getElementById("main_div").innerHTML = header + buttons + settings;
}

function keypressed(e) {
    keypressedcode = e.keyCode;
    console.log(keypressedcode);

    if(keypressedcode == "13" && checked == false) {
        if(oper == "Division" && document.getElementById("remainder").value == "") {
            document.getElementById("remainder").focus();
        }

        else {
            check();
        }
    }
}
