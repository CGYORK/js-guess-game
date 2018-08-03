# Guessing Game!

1. Create a file, guess.html, well-formed HTML document
  * an input field with an id of "guess-number" (this input field is NOT inside a form, its just hanging out by itself)
  * a button that says "Guess!" with an id of "submit-guess"
  * a div with an id of "results"
2. Include this link to the jQuery library in the head of your HTMl file:
  * `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`
2. Include a <src> tag in your HTML document that links to another file, guess.js
3. Create a file, guess.js with:
  * The "document ready" function
4. Inside the document ready function we will:
  * generate a random number, 1-10 and store it in a variable, `number`

  ```javascript
    const number = Math.floor((Math.random() * 10) + 1);
  ```
  * write a function that:
    * listens to the click of the "submit-guess" button
    * grabs the value of the "guess-number" input
    * compares the that number to the random number we generated
    * updates the "results" section of the page with "You won!" or "You lost!" depending on whether or not the guess matched the number you generated.

  ```javascript
$(document).ready(function() {
  const number = Math.floor((Math.random() * 10) + 1);
  $("guess-btn").on('click', function(e) {
    e.preventDefault()
    let guess = $("guess-number").val();
    if (guess === number) {
      $("results").html("YOU WIN")
    } else {
      $("results").html("YOU LOOSE")
    }
  })
})
```
