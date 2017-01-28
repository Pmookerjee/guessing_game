


function guessingGame(){

  var myAnswerOne = 'washington dc';
  var myAnswerTwo = 'orange';
  var myAnswerThree = 'snowboarding';
  var myAnswerFour = 'drums';
  var myAnswerFive = 'french';
  var myAnswerSix = 'gibberish';
  var myAnswerSeven = ['adrian', 'soren', 'noah'];
  var keepGuessing= true;

  var user = prompt('What\'s your name?');
  console.log('line 15: user is ', user);
  alert('Hello ' + user + '. Welcome to my game!');
  //Ask user a question
  //Take their answer as input; store it in a var
  //Validate their answer matches my answer
  //Depending on true or fasle, provide feedback


  var answerOne = prompt('What state am I from?');
  if(answerOne.toLowerCase() === myAnswerOne){
    console.log('line 23: answerOne is ', answerOne)
    alert('Wow. How did you know that?');
  } else {
    console.log('line 23: answerOne is', answerOne);
    alert('I am from ' + myAnswerOne + '.');
  }

  var answerTwo = prompt('What is my favorite color?');
  if(answerTwo.toLowerCase() === myAnswerTwo){
    console.log('line 30: answerTwo is ', answerTwo)
    alert('You really know me well!');
  } else {
    console.log('line 30: answerTwo is ', answerTwo);
    alert('My favorite color is ' + myAnswerTwo + '.');
  }

  var answerThree = prompt('What is my best sport?');
  if(answerThree.toLowerCase() === myAnswerThree){
    console.log('line 37: answerThree is ', answerThree);
    alert('Yep! You\'re a superstar.');
  } else {
    console.log('line 37: answerThree is ', answerThree)
    alert('Close! My best sport is ' + myAnswerThree + '.');
  }

  var answerFour = prompt('What instrument do I like to play?');
  if(answerFour.toLowerCase() === myAnswerFour){
    console.log('line 44: answerFour is', answerFour);
    alert('Badum bum bum... ching! Well done...');
  } else {
    console.log('line 44: answerFour is ', answerFour);
    alert('It happens to be the... drumroll... ' + myAnswerFour + '.');
  }

  while(keepGuessing){
    var answerFive = prompt('What language do I speak?');
    var answerSix = prompt('What other language do I speak?');

    if(((answerFive.toLowerCase() === myAnswerFive) || (answerFive.toLowerCase() === myAnswerSix)) && ((answerSix.toLowerCase() === myAnswerFive) || (answerSix.toLowerCase() === myAnswerSix))) {
      console.log('line 55: answerFive and answerSix are ' , answerFive + ' and ' + answerSix);
      alert('You guessed it! You are amazing!');
      keepGuessing = false;
    } else {
      var tryAgain = prompt('Not quite. Guess again? Enter \'T\' to try again, or \'Q\' to quit');
      switch(tryAgain.toUpperCase()) {
        case 'Q':
        console.log('line 59: tryAgain is ', tryAgain);
        alert('I speak ' + myAnswerFive + ', and ' + myAnswerSix + '.');
        keepGuessing = false;
        break;
        case 'T':
        keepGuessing = true;
        break;
        default:
        console.log('line 59: tryAgain is ', tryAgain);
        alert('Sorry. I didn\'t understand your answer');
        keepGuessing = false;
        break;
      }
    }
  }

  var answerSeven = prompt('Okay, last question (I promise): Guess one of my kids\' names...');
  if(myAnswerSeven.indexOf(answerSeven.toLowerCase()) > -1){
    var son = myAnswerSeven.indexOf(answerSeven.toLowerCase());
    console.log('line 90: son (index of array) is: ', son);
    alert('You guessed ' + myAnswerSeven[son] + ' correctly. Now I\'m really a bit concerned.');
  } else {
    console.log('line 90: son (index of array) is: ', son);
    alert('Their names are ' + myAnswerSeven[0] + ', ' + myAnswerSeven[1] + ', ' + myAnswerSeven[2] + '.');
  }
}
