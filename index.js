var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosenColour = [];
var c = 0;
var l = 1;
$(document).keypress(function() {
  l=1;
if(c==0){
  newSequence();
  $("body").removeClass("game-over");
}
});
var i = 0;
function checkAnswer() {
  c=1;
    if (gamePattern[i] === userChosenColour[i])
    {
      if(i===(gamePattern.length)-1)
      {
        console.log("true");
         newSequence();
       }
      else i++;
    }
    else
    {
      while(gamePattern.length != 0)
      {
        gamePattern.pop();
      }
      c=0;
      l=1;
      console.log("false");
      $("body").addClass("game-over");
      $("#level-title").html(
"<h1 id='level-title'> press any key to start <br> game over</h1> "     );
    }
  }

function newSequence() {
  $("#level-title").text("level : " + l);
  l++;
  c=1;
  while(userChosenColour.length != 0)
  {
    userChosenColour.pop();
  }
  var randomNumber = Math.floor(Math.random() * 4);
  var newChoosenColor = buttonColors[randomNumber];
  gamePattern.push(newChoosenColor);
  console.log(gamePattern);
  playSound(newChoosenColor);
  $("#" + newChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  i = 0;
}


function animatePress(choosenColor) {
  $("#" + choosenColor).addClass("pressed");
  setTimeout(function() {
    $("#" + choosenColor).removeClass("pressed");
  }, 50);
}


$(".btn").click(function() {
  var x = $(this).attr("id");
  userChosenColour.push(x);
  console.log(userChosenColour);
  playSound(x);
  animatePress(x);
  checkAnswer();
});



function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
