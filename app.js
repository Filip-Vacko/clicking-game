var timeToClick = 1500;
var widthHeight = 300;
var start = new Date().getTime();
var yourLives = [1, 2, 3];
var level = 1;
var round = 1;
var totalScore = 0;
var topScore = 0;
var bestTime = 0;

function loopLives() {
    for (var i = 0; i < yourLives.length; i++) {
        document.getElementById("lifeDiv").innerHTML += '<img src="https://maxcdn.icons8.com/Color/PNG/24/Gaming/hearts-24.png" title="Hearts" width="24">';
    }
}

loopLives();

document.getElementById("score").innerHTML += totalScore;
document.getElementById("time").innerHTML += bestTime;

function noDisplay() {
    document.getElementById("circle").style.display = "none";
}

function createCircle() {
    $("#circle").css("width", Math.floor(Math.random() * (widthHeight - widthHeight / 6 + 1)) + widthHeight / 6 + 'px');
    $("#circle").css("height", Math.floor(Math.random() * (widthHeight - widthHeight / 6 + 1)) + widthHeight / 6 + 'px');
    $("#circle").css("background-color", "#" + ((1 << 24) * Math.random() | 0).toString(16));
    $("#circle").css("border-radius", "50%");
    $("#circle").css("position", "relative");
    $("#circle").css("top", Math.floor(Math.random() * 400) + 'px');
    $("#circle").css("left", Math.floor(Math.random() * 400) + 'px');
    $("#circle").css("border-top-left-radius", Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px');
    $("#circle").css("border-top-right-radius", Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px');
    $("#circle").css("border-bottom-left-radius", Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px');
    $("#circle").css("border-bottom-right-radius", Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px');
    $("#circle").css("border-bottom-right-radius", Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px');
    $("#circle").css("border-style", "solid");
    $("#circle").css("border-width", Math.floor(Math.random() * (3 - 1 + 1)) + 1 + 'px');
    $("#circle").css("border-width", Math.floor(Math.random() * (3 - 1 + 1)) + 1 + 'px');
    document.getElementById("circle").style.display = "block";
    start = new Date().getTime();
}

function animateCircle() {
    $("#circle").animate({
        width: Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px',
        height: Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px',
        borderTopLeftRadius: Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px',
        borderTopRightRadius: Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px',
        borderBottomLeftRadius: Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px',
        borderBottomRightRadius: Math.floor(Math.random() * (300 - 50 + 1)) + 50 + 'px',
        borderWidth: "1px",
        top: Math.floor(Math.random() * 400) + 'px',
        left: Math.floor(Math.random() * 400) + 'px',

    }, timeToClick, function () {
        noDisplay();
        yourLives.splice(0, 1);
        document.getElementById("lifeDiv").innerHTML = "";
        loopLives();

        if (yourLives.length == 0) {
            alert("You have no lives left, game over!")
            totalScore = 0;
            level = 1;
            round = 1;
            yourLives = [1, 2, 3];
            loopLives();
            document.getElementById("levelDiv").innerHTML = "Level " + level;
            document.getElementById("roundDiv").innerHTML = "Round " + round;
            document.getElementById("score").innerHTML = "Your total score: " + totalScore;
        }
        else if (yourLives.length == 1) {
            alert("Too slow, you lost a life! You have " + yourLives.length + " life left");
        }
        else {
            alert("Too slow, you lost a life! You have " + yourLives.length + " lives left");
        }
    });

    document.getElementById("lifeDiv").innerHTML = "";
    loopLives();
}

document.getElementById("playButton1").onclick = function () {
    createCircle();
    animateCircle();
    if (yourLives.length == 0) {
        alert("You have no lives left, game over!")
        totalScore = 0;
        yourLives = [1, 2, 3];
        loopLives();
    }
};

$("#circle").click(function () {

    $("#circle").stop();
    round++;

    if (round == 6) {
        level++;
    }
    if (round == 6 && level == 2) {
        document.getElementById("levelDiv").innerHTML = "Level " + level;
        round = 1;
        timeToClick = 1100;
        widthHeight = 280;
        alert("Level complete! Welcome to level " + level + " !");
    }
    if (round == 6 && level == 3) {
        document.getElementById("levelDiv").innerHTML = "Level " + level;
        round = 1;
        timeToClick = 900;
        widthHeight = 260;
        alert("Level complete! Welcome to level " + level + " !");
    }
    if (round == 6 && level == 4) {
        document.getElementById("levelDiv").innerHTML = "Level " + level;
        round = 1;
        timeToClick = 700;
        widthHeight = 240;
        alert("Level complete! Welcome to level " + level + " !");
    }
    if (round == 6 && level == 5) {
        document.getElementById("levelDiv").innerHTML = "Level " + level;
        round = 1;
        timeToClick = 500;
        widthHeight = 230;
        alert("Level complete! Welcome to level " + level + " !");
    }
    if (round == 6 && level == 6) {
        document.getElementById("levelDiv").innerHTML = "Hell mode";
        round = 1;
        timeToClick = 350;
        widthHeight = 230;
        alert("Game complete! Welcome to hell mode!");
    }
    document.getElementById("roundDiv").innerHTML = "Round " + round;

    var end = new Date().getTime();
    var timeTaken = (end - start);
    timeLeft = (2000 - timeTaken);

    if (timeLeft <= 500) {
        yourScore = Math.floor(timeLeft);
    }
    else if (timeLeft <= 700) {
        yourScore = Math.floor(timeLeft * 1.1);
    }
    else if (timeLeft <= 900) {
        yourScore = Math.floor(timeLeft * 1.25);
    }
    else if (timeLeft <= 1100) {
        yourScore = Math.floor(timeLeft * 1.45);
    }
    else if (timeLeft <= 1200) {
        yourScore = Math.floor(timeLeft * 1.7);
    }
    else if (timeLeft <= 1300) {
        yourScore = Math.floor(timeLeft * 2.05);
    }
    else if (timeLeft <= 1500) {
        yourScore = Math.floor(timeLeft * 2.45);
    }
    else if (timeLeft <= 1700) {
        yourScore = Math.floor(timeLeft * 3);
    }

    var yourBonus = (yourScore - timeLeft);

    noDisplay();

    totalScore = (totalScore + yourScore);

    if (bestTime == 0 || bestTime > timeTaken) {
        bestTime = timeTaken;
    }
    if (topScore < totalScore) {
        topScore = totalScore;
        document.getElementById("topScoreDiv").innerHTML = "Top score: " + topScore;
    }
    document.getElementById("score").innerHTML = "Your total score: " + totalScore;
    document.getElementById("time").innerHTML = "Your best time so far: " + bestTime + " ms";
});