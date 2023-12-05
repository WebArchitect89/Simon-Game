// step 1 


// 3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

var buttonColors = ["red", "blue", "green", "yellow"]

// 5. At the top of the game.js file, create a new empty array called gamePattern.

var gamePattern = [];




// 1. create a new function called nextSequence()


function nextSequence (){
// 2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber (check the random number in chrome)

    var randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber)
    // 4. Create a new variable called randomChosenColor and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
    // 6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColor);
    console.log(gamePattern)

// step 2

// 1. Use jQuery to select the button with the same id as the randomChosenColour
// 2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
// You should end up with an effect like this:
// 3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

var audio = new Audio("sounds/" + randomChosenColor+".mp3")

$("#"+randomChosenColor).fadeOut().fadeIn()
$("#"+randomChosenColor).on("click", function(){
audio.play();
});


};

nextSequence();









