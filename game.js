var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;

function nextSequence(){

level++;
$("#level-title").text("Level "+level);

  var random_number=4*Math.random();
  random_number=Math.floor(random_number);
  var randomChosenColour=buttonColours[random_number];
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

}


//next Level







$(document).one("keypress",function () {

if(!started){

  $("#level-title").text("Level "+level);
  nextSequence();
  started=true;
}



})

$(".btn").on("click",function () {

var userChosenColour=$(this).attr("id");
animatePress(userChosenColour);
playSound(userChosenColour);

userClickedPattern.push(userChosenColour);


var lastIndex=userClickedPattern.length-1;
if(gamePattern[lastIndex]!=userClickedPattern[lastIndex])
{
  $("#level-title").addClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");
  gamePattern=[];
  userClickedPattern=[];
  started=false;
}
if(started && userClickedPattern.length==gamePattern.length){
  setTimeout(function () {
    userClickedPattern=[];
    nextSequence();
  },1000);



}




})
function playSound(name){
  var audio= new Audio("./sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("."+currentColor).addClass("pressed");
  setTimeout(function () {

    $("."+currentColor).removeClass("pressed");
  },100);

}
