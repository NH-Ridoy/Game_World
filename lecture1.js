
let numOfLost = 0;
let numOfWon = 0;

for(i=1; i <= 5; i++) {

    let guessNumber = parseInt(prompt('Enter your Guessing number 1 to 5'));
    let randomNumber = Math.floor(Math.random()*6);

    if(randomNumber == guessNumber){
        console.log('You Have Won');
        numOfWon++;
    }else{
        console.log('You Have Lost ! Random was ' + randomNumber);
        numOfLost++;
    }
}

document.write('You Have won: ' + numOfWon + ' times' + '<br/>');
document.write('You Have lost: ' + numOfLost + ' times');

