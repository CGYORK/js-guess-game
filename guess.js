$(document).ready(function() {
  $("#guess-btn").on("click", playGame)
})


function getDadJoke() {
  $.ajax({
      url: "https://icanhazdadjoke.com/",
      dataType: "json",
      success: function(result){
        debugger;
      }
    });
}

function playGame() {
  const randomNumber        = Math.floor((Math.random() * 10) + 1);
  const guessedNumberString = $("#guess-number").val();
  const guessedNumber       = parseInt(guessedNumberString)
  if (guessedNumber > 10 || guessedNumber < 1) {
    alert("PLEASE ENTER A NUMBER BETWEEN 1 AND 10")
  } else if (randomNumber === guessedNumber) {
    $("#results").html("You guessed: " +  guessedNumber + "and the answer was " + randomNumber + ", You WON!")
  } else {
    $("#results").html("You guessed: " +  guessedNumber + "and the answer was " + randomNumber + ", You LOST!")
  }
}


// SHOW not JUST that someone won/lost, but display the guessed number and the random
// if someone enters a number that is NOT between 1 and 10, show an error message, raise an alert
