function guessNumber() {

    //generate a random number from 1 to 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    alert(randomNumber);

    //get the value from the user
    let number = prompt('guess a number from 1 to 10');

    if (number == randomNumber) {
        alert('You Guess the right number');
    }
    else {
        alert('Better luck Next Time');
    }

}