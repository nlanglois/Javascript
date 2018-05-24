$(document).ready(function() {

    var words = [
        "Nikolai",
        "OLED",
        "Macintosh"
    ]
    

    var input = $('input.input')

    
    var wordToGuess = words[Math.floor(Math.random() * words.length)];
    var lettersToChoose = wordToGuess.split('')
    console.log(lettersToChoose)


    var correctGuesses = []
    for (var c = 0; c < lettersToChoose.length; c++) {
        correctGuesses.push("-");
    }
    console.log(correctGuesses)


    renderCorrectGuesses(correctGuesses)

    
    $("h2.wordToGuess").text(wordToGuess)



    $("button.submit").on("click", function() {
        var guess = input.val()
        
        if (guess == "") {

            alert("You've got to enter something to try.")

        } else {

            //for (var g = 0; g < lettersToChoose.length; g++) {

                var correct = $.inArray(guess, lettersToChoose)
                console.log(correct)

                if (correct != -1) {
                    alert("You guessed correctly!")
                    correctGuesses[correct] = lettersToChoose[correct]
                    renderCorrectGuesses(correctGuesses)

                    lettersToChoose.splice(correct, 1);

                    console.log(lettersToChoose)
                    console.log(correctGuesses)

                } else {
                    alert("Nope, not in the chosen word.")
                }

              //  return

            //}            
            
        }


    })

})


function renderCorrectGuesses(correctGuesses) {
    var location = $('div.guesses')
    for (var c = 0; c < correctGuesses.length; c++) {
        location.append(c)
    }
}