$(document).ready(function() {

    var words = [
        "Nikolai",
        "OLED",
        "Macintosh",
        "j"
    ]
    

    var input = $('input.input')

    
    var wordToGuess = words[Math.floor(Math.random() * words.length)];
    var lettersToChoose = wordToGuess.split('')
    var numLetters = lettersToChoose.length;

    console.log(lettersToChoose)


    var correctGuesses = []
    for (var c = 0; c < lettersToChoose.length; c++) {
        correctGuesses.push("_");
    }
    console.log(correctGuesses)


    $("h2.wordToGuess").text(wordToGuess)
    renderCorrectGuesses(correctGuesses)




    $("button.submit").on("click", function() {
    
        var guess = input.val()
        
        if (guess == "") {
            alert("You've got to enter something to try.")

        } else {
            var correct = $.inArray(guess, lettersToChoose)
            console.log(correct)

            if (correct != -1) {
                //alert("You guessed correctly!")
                correctGuesses[correct] = lettersToChoose[correct]
                renderCorrectGuesses(correctGuesses)

                delete lettersToChoose[correct]
                //lettersToChoose.splice(correct, 1);

                console.log(lettersToChoose)
                console.log(correctGuesses)

                numLetters--

            } else {
                //alert("Nope, not in the chosen word.")
            }

        }


        if (numLetters == 0) {
            alert("You win!")
            console.log("You win!!")
        }

        console.log("Size of numLetters is " + numLetters)


    })

})


function renderCorrectGuesses(correctGuesses) {
    var location = $('div.guesses').empty()
    
    for (var c = 0; c < correctGuesses.length; c++) {
        var div = $('<span>')
        div.text(correctGuesses[c])
        location.append(div)
    }

    //input.val() = ""
}