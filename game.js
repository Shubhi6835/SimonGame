var gamePattern = [];
var randomNumber;
var level = 1;
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var userClickedPattern  = [];

function playSound(name)
{   
    console.log("insidePlaySounds");
    var sound = name;
    switch(sound)
    {
     case 0:
         randomChosenColour=buttonColors[0];
              var audio = new Audio('./sounds/red.mp3');
              audio.play();
              console.log("inside case 0");
         break;
     case 1:
              var audio = new Audio('./sounds/blue.mp3');
              audio.play();
              console.log("inside case 1");
         break;  
     case 2:
              var audio = new Audio('./sounds/green.mp3');
              audio.play();
              console.log("inside case 2");
         break;
     case 3:
              var audio = new Audio('./sounds/yellow.mp3');
              audio.play();
              console.log("inside case 3");
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
   console.log("Inside nextSequence");
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
        setTimeout(function(){
            nextSequence()}
        ,1000) 
    });
});
$(document).ready(function() {
    $("#red").click(function() {
        var userChosenColor = this.id;
        animatePress(userChosenColor);
        $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/red.mp3');
        audio.play();
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
        setTimeout(function(){
            nextSequence()}
        ,1000)
    });
});
nextSequence();
console.log(randomNumber);

$(document).keypress(function(event){
    if($("h1").text()=="Press Any Key to Start")
    {
        $("h1").text("Level 1");
        nextSequence();
    }
    else{
          console.log("Key Already pressed");
    }
})





