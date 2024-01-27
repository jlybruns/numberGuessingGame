function runGame() {
    const target = Math.floor(Math.random() * 100 + 1);
    const max = target + 10;
    const min = target - 10;
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
    do {
        guessString = prompt('Guess a number between 1 and 100.\n\n');
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target, max, min,);
    } while (!correct); 
    alert('You got it! The number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly.')
}

function checkGuess (guessNumber, target, max, min) {
    let correct = false;

    if (isNaN(guessNumber)){
        alert('You must type a number 1-100.');
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('You must enter a number between 1 and 100.')
    }else if (guessNumber < target && guessNumber <= max && guessNumber >= min) {
        alert('You guessed: ' + guessNumber + ' Getting warmer, but your guess is too low. Guess again.');
    } else if (guessNumber > target && guessNumber <= max && guessNumber >= min) {
        alert('You guessed: ' + guessNumber + ' Getting warmer Your guess was too high. Guess again.');
    } else if (guessNumber < target){
        alert('Getting colder. That guess is too low');
    } else if (guessNumber > target){
        alert('Getting colder. That guess is too high.')
    }else {
        correct = true;
    }
    return correct;
}