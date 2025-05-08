var gamePattern = [];
var randomNumber;
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

function nextSequence()
{     
   randomNumber = Math.floor((Math.random() * 4));    
   console.log("Inside nextSequence");
   playSound(randomNumber);
}

gamePattern.push(randomChosenColour);


$(document).ready(function() {
    $("#green").click(function() {
        var userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);
        $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/green.mp3');
        audio.play();
        nextSequence();
    });
});
$(document).ready(function() {
    $("#red").click(function() {
        var userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);
        $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/red.mp3');
        audio.play();
        nextSequence();
    });
});

$(document).ready(function() {
    $("#yellow").click(function() {
        var userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);
        $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/yellow.mp3');
        audio.play();
        nextSequence();
    });
});

$(document).ready(function() {
    $("#blue").click(function() {
        var userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);
        $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/blue.mp3');
        audio.play();
        nextSequence();
    });
});
nextSequence();
console.log(randomNumber);





