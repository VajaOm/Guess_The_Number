'use strict';

let random_No = Math.trunc(Math.random() * 20) + 1;
console.log(random_No)
let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
    random_No = Math.trunc(Math.random() * 20) + 1;
    console.log(random_No)
    score = 20;

    document.querySelector(".message").innerHTML = "Start guessing...";
    document.querySelector("Body").style.backgroundColor = "#222";
    document.querySelector(".score").innerHTML = "20";
    document.querySelector(".number").innerHTML = "?";
    document.querySelector(".check").style.visibility = "visible";
});

document.querySelector(".check").addEventListener("click", function () {
    var number = parseInt(document.querySelector(".guess").value);

    if (number < random_No) {
        document.querySelector(".message").innerHTML = "! Low";
        score--;
        document.querySelector(".score").innerHTML = score;
    }
    else if (number === random_No) {
        document.querySelector(".message").innerHTML = "🎊🤩🎉 Winner Winner";
        document.getElementById("Body").style.backgroundColor = "#00cc00";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").innerHTML = highscore;
        }
        else {
            document.querySelector(".highscore").innerHTML = highscore;
        }
        document.querySelector(".check").style.visibility = "hidden";
        document.querySelector(".number").innerHTML = random_No;

    }

    else {
        document.querySelector(".message").innerHTML = "! High";
        score--;
        document.querySelector(".score").innerHTML = score;
    }
}); 