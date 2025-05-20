var gamePattern = [];
var randomNumber;
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var userClickedPattern = [];
var started = false;


//This is fine
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
  
      } else {
  
        console.log("wrong");
  
        //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        playSound("./sounds/wrong.mp3");
  
        //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        startOver();
      }
}

function startOver(){
 level=0;
 gamePattern = [];
 $("h1").text("Press Any Key to Start Game");
}
//this is fine
function playSound(name)
{   
    var sound = name;
    switch(sound)
    {
     case 0:
         randomChosenColour=buttonColors[0];
              var audio = new Audio('./sounds/red.mp3');
              audio.play();
         break;
     case 1:
              var audio = new Audio('./sounds/blue.mp3');
              audio.play();
         break;  
     case 2:
              var audio = new Audio('./sounds/green.mp3');
              audio.play();
         break;
     case 3:
              var audio = new Audio('./sounds/yellow.mp3');
              audio.play();
         break;  
     default:
         console.log("Something went wrong inside playSound");
    }
}

//This is Fine
function animatePress(currentColor) {
    var button = $("#" + currentColor);
    button.addClass("pressed");
  
    setTimeout(function () {
      button.removeClass("pressed");
    }, 100); // removes the class after 100ms
  }
  
// This is fine
function nextSequence()
{     
   userClickedPattern = [];
   level = level + 1;
   $("h1").text("Level "+ level);
   randomNumber = Math.floor((Math.random() * 4));
   randomChosenColour = buttonColors[randomNumber];
   gamePattern.push(randomChosenColour);
   playSound(randomNumber);
   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}


$(document).ready(function() {
    $("#green").click(function() {
        var userChosenColor = this.id;
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        playSound(2);
        checkAnswer(userClickedPattern.length-1);
    });
});
$(document).ready(function() {
    $("#red").click(function() {
        var userChosenColor = this.id;
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        playSound(0);
        checkAnswer(userClickedPattern.length-1);
    });
});

$(document).ready(function() {
    $("#yellow").click(function() {
        var userChosenColor = this.id;
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        playSound(3);
        checkAnswer(userClickedPattern.length-1);
    });
});

$(document).ready(function() {
    $("#blue").click(function() {
        var userChosenColor = this.id;
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        playSound(1);
        checkAnswer(userClickedPattern.length-1);
    });
});

//This is fine
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });