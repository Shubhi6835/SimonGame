var gamePatter;
var randomNumber;
var userClickedPattern  = [];
function nextSequence()
{     
   randomNumber = Math.floor((Math.random() * 4));    
}
nextSequence();
console.log(randomNumber);
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour;


switch(randomNumber){
    case 0:
        randomChosenColour=buttonColors[0];
        break;
    case 1:
        randomChosenColour=buttonColors[1];
        break;  
    case 2:
        randomChosenColour=buttonColors[2];
        break;
    case 3:
        randomChosenColour=buttonColors[3];
        break;  
    default:
        console.log("Something went wrong");
}

var gamePattern = [];
gamePattern.push(randomChosenColour);


$(document).ready(function() {
    $("#green").click(function() {
        var userChosenColor = "green";
        userClickedPattern.push(userChosenColor);
        $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/green.mp3');
        audio.play();
    });
});
$(document).ready(function() {
    $("#red").click(function() {
        var userChosenColor = "red";
        userClickedPattern.push(userChosenColor);
        $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/red.mp3');
        audio.play();
    });
});

$(document).ready(function() {
    $("#yellow").click(function() {
        var userChosenColor = "yellow";
        userClickedPattern.push(userChosenColor);
        $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/yellow.mp3');
        audio.play();
    });
});

$(document).ready(function() {
    $("#blue").click(function() {
        var userChosenColor = "blue";
        userClickedPattern.push(userChosenColor);
        $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio = new Audio('./sounds/blue.mp3');
        audio.play();
    });
});




