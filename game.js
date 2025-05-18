var gamePattern = [];
var randomNumber;
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour = [];
var userClickedPattern = [];

function checkAnswer(currentLevel){
    console.log("I am here right now");
}

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

function animatePress(currentColor) {
    var button = $("#" + currentColor);
    button.addClass("pressed");
  
    setTimeout(function () {
      button.removeClass("pressed");
    }, 100); // removes the class after 100ms
  }
  

function nextSequence()
{     
   level = level + 1;
   $("h1").text("Level "+ level);
   randomNumber = Math.floor((Math.random() * 4));
   console.log(buttonColors[randomNumber]);
   randomChosenColour = buttonColors[randomChosenColour];
   playSound(randomNumber);
}

gamePattern.push(randomChosenColour);


$(document).ready(function() {
    $("#green").click(function() {
        var userChosenColor = this.id;
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/green.mp3');
        audio.play();
        checkAnswer(userClickedPattern.length-1);
        setTimeout(function(){
            nextSequence()}
        ,1000) 
    });
});
$(document).ready(function() {
    $("#red").click(function() {
        var userChosenColor = this.id;
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/red.mp3');
        audio.play();
        checkAnswer(userClickedPattern.length-1);
        setTimeout(function(){
            nextSequence()}
        ,1000)
    });
});

$(document).ready(function() {
    $("#yellow").click(function() {
        var userChosenColor = this.id;
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/yellow.mp3');
        audio.play();
        checkAnswer(userClickedPattern.length-1);
        setTimeout(function(){
            nextSequence()}
        ,1000)
    });
});

$(document).ready(function() {
    $("#blue").click(function() {
        var userChosenColor = this.id;
        animatePress(userChosenColor);
        userClickedPattern.push(userChosenColor);
        $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/blue.mp3');
        audio.play();
        checkAnswer(userClickedPattern.length-1);
        setTimeout(function(){
            nextSequence()}
        ,1000)
    });
});









