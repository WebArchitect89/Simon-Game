// Global Arrays

buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = [];
var gamePattern = [];
var userClickedPattern = [];

var start = false;
var level = 0;

// Check for press

$(document).on("keydown", function () {
  if (start === false) {
    nextSequence();
    $("#level-title").text(" Level " + level);
    start = !start;
  }
});

// Function that selects the color


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  playSound(randomChosenColor);
  $("#level-title").text(" Level " + level);
  // button actions
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  level++;
}

// Determine which buttons got clicked
$(".btn").on("click", function () {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

// Check if the answer is correct

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    var wrongMove = new Audio("sounds/wrong.mp3");
    wrongMove.play();
$("body").addClass("game-over");
setTimeout(() => {
  $("body").removeClass("game-over");
}, 200);
$("h1").text(" You got to level " + level + ". Game Over, Press any Key to Play");
startOver();
};
};


function startOver (){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  start = !start;
};

// Music an animation function
function playSound(name) {
  $("#" + name).on("click", function () {
    var song = new Audio("sounds/" + name + ".mp3");
    song.play();
  });
}

function animatePress(currentColor) {
  $("#" + currentColor).on("click", function () {
    $(this).addClass("pressed");

    setInterval(removeClass, 100);

    function removeClass() {
      $("#" + currentColor).removeClass("pressed");
    }
  });
}
