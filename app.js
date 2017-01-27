var user = prompt('What\'s your name?');
console.log('line 26: answerTwo: Hello ' + user + '. Welcome to my site!');
//Ask user a question
//Take their answer as input; store it in a var
//Validate their answer matches my answer
//Depending on true or fasle, provide feedback

var myAnswerOne = 'washington dc';
var myAnswerTwo = 'orange';
var myAnswerThree = 'snowboarding';
var myAnswerFour = 'drums';
var myAnswerFive = 'french';
var myAnswerSix = 'gibberish';
var myAnswerSeven = ['Adrian', 'Soren', 'Noah'];
var keepGuessing= true;

var click = document.getElementById('gameButton');
click.onclick = guessingGame();

function guessingGame(){

  var answerOne = prompt('What state was I born in?');
  if(answerOne.toLowerCase() === myAnswerOne){
    console.log('line 19: answerOne is correct: Wow. How did you know that?');
  } else {
    console.log('line 21: answerOne is incorrect: I am from ' + myAnswerOne + '.');
  }

  var answerTwo = prompt('What is my favorite color?');
  if(answerTwo.toLowerCase() === myAnswerTwo){
    console.log('line 26: answerTwo is correct: You really know me well!');
  } else {
    console.log('line 28: answerTwo is incorrect: My favorite color is ' + myAnswerTwo + '.');
  }

  var answerThree = prompt('What is my best sport?');
  if(answerThree.toLowerCase() === myAnswerThree){
    console.log('line 33: answerThree is correct: Yep! You\'re a superstar.');
  } else {
    console.log('line 35: answerThree is incorrect: Close! My best sport is ' + myAnswerThree + '.');
  }

  var answerFour = prompt('What instrument do I like to play?');
  if(answerFour.toLowerCase() === myAnswerFour){
    console.log('line 40: answerFour is correct: Badum bum bum... ching! Well done...');
  } else {
    console.log('line 42 is incorrect: answerFour: It happens to be the... drumroll... ' + myAnswerFour + '.');
  }

  while(keepGuessing){
    var answerFive = prompt('What language do I speak?');
    var answerSix = prompt('What other language do I speak?');

    if((answerFive.toLowerCase() === myAnswerFive) && (answerSix.toLowerCase() === myAnswerSix)) {
      console.log('line 52: answerFive is correct: You guessed it! You are amazing!');
      keepGuessing = false;
    } else {
      var tryAgain = prompt('Not quite. Guess again? Enter \'T\' to try again, or \'Q\' to quit');
      switch(tryAgain.toUpperCase()) {
        case 'Q':
        console.log('line 58: tryAgain = Q: I speak ' + myAnswerFive + ', and ' + myAnswerSix + '.');
        keepGuessing = false;
        break;
        case 'T':
        keepGuessing = true;
        break;
        default:
        console.log('line 65: tryAgain = ??: Sorry. I didn\'t understand your answer');
        keepGuessing = false;
        break;
      }
    }
  }

  var answerSeven = prompt('Okay, last question (I promise): Guess one of my kids\' names...');
  if(myAnswerSeven.indexOf(answerSeven.toLowerCase()) > -1){
    console.log('line 74: answerSeven is correct: You guessed ' + answerSeven + ' correctly. Now I\'m really a bit concerned.');
  } else {
    console.log('line 76: answerTwo is incorrect: Their names are ' + myAnswerSeven[0] + ', ' + myAnswerSeven[1] + ', ' + myAnswerSeven[2] + '.');
  }
}
