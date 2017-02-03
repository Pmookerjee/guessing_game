//There are two games here, guessingGame1 is for labs 1 and 2
//guessingGame2 on line 99 is for lab 3


function guessingGame1(){

  var myAnswerOne = 'washington dc';
  var myAnswerTwo = 'orange';
  var myAnswerThree = 'snowboarding';
  var myAnswerFour = 'drums';
  var myAnswerFive = ['french', 'gibberish'];
  var myAnswerSix = ['adrian', 'soren', 'noah'];
  var correctAnswers = 0; //to tally user's correct guesses

  var user = prompt('What\'s your name?');

  alert('Hello ' + user + '. Welcome to my game!');

  //Ask user a question
  //Take their answer as input; store it in a var
  //Validate their answer matches my answer
  //Depending on true or false, provide feedback

  // fuck this crap  TEST!

  // Hellur how you durin?!
  //Question One
  var answerOne = prompt('What state am I from?');
  if(answerOne.toLowerCase() === myAnswerOne){
    console.log('line 23: answerOne is ', answerOne)
    alert('Wow. How did you know that?');
    correctAnswers ++;
  } else {
    console.log('line 23: answerOne is', answerOne);
    alert('I am from ' + myAnswerOne + '.');
  }

  //Question Two
  var answerTwo = prompt('What is my favorite color?');
  if(answerTwo.toLowerCase() === myAnswerTwo){
    console.log('line 30: answerTwo is ', answerTwo)
    alert('You really know me well!');
    correctAnswers ++;
  } else {
    console.log('line 30: answerTwo is ', answerTwo);
    alert('My favorite color is ' + myAnswerTwo + '.');
  }

  //Question Three
  var answerThree = prompt('What is my best sport?');
  if(answerThree.toLowerCase() === myAnswerThree){
    console.log('line 37: answerThree is ', answerThree);
    correctAnswers ++;
    alert('Yep! You\'re a superstar.');
  } else {
    console.log('line 37: answerThree is ', answerThree)
    alert('Close! My best sport is ' + myAnswerThree + '.');
  }

  //Question Four
  var answerFour = prompt('What instrument do I like to play?');
  if(answerFour.toLowerCase() === myAnswerFour){
    console.log('line 44: answerFour is', answerFour);
    correctAnswers ++;
    alert('Badum bum bum... ching! Well done...');
  } else {
    console.log('line 44: answerFour is ', answerFour);
    alert('It happens to be the... drumroll... ' + myAnswerFour + '.');
  }

  //Question Five
  var answerFive = [];
  answerFive[0] = prompt('What language do I speak?');
  answerFive[1] = prompt('What other language do I speak?');

  if(((answerFive[0].toLowerCase() === myAnswerFive[0]) || (answerFive[0].toLowerCase() === myAnswerFive[1])) && ((answerFive[1].toLowerCase() === myAnswerFive[0]) || (answerFive[1].toLowerCase() === myAnswerFive[1]))) {
    console.log('line 55: answerFive is ' , answerFive[0] + ' and ' + answerFive[1]);
    alert('You guessed it! You are amazing!');
    correctAnswers += 2;
  } else if (((answerFive[0].toLowerCase() === myAnswerFive[0]) || (answerFive[0].toLowerCase() === myAnswerFive[1])) || ((answerFive[1].toLowerCase() === myAnswerFive[0]) || (answerFive[1].toLowerCase() === myAnswerFive[1]))) {
    console.log('line 55: answerFive is ' , answerFive[0] + ' and ' + answerFive[1]);
    alert('Nice! You got one of them right! I speak ' + myAnswerFive[0] + ', and ' + myAnswerFive[1] + '.');
    correctAnswers++;
  } else {
    console.log('line 55: answerFive is ' , answerFive[0] + ' and ' + answerFive[1]);
    alert('I speak ' + myAnswerFive[0] + ', and ' + myAnswerFive[1] + '.');
  }

  //Question Six
  var answerSix = prompt('Here\'s another question: Guess one of my kids\' names...');
  if(myAnswerSix.indexOf(answerSix.toLowerCase()) > -1){
    var son = myAnswerSix.indexOf(answerSix.toLowerCase());
    console.log('line 90: son (index of array) is: ', son);
    correctAnswers ++;
    alert('You guessed ' + myAnswerSix[son] + ' correctly. You guessed '  + correctAnswers + ' answers correctly!');
  } else {
    console.log('line 90: ', myAnswerSix.indexOf(answerSix.toLowerCase()));
    alert('Their names are ' + myAnswerSix[0] + ', ' + myAnswerSix[1] + ', ' + myAnswerSix[2] + '. You guessed ' + correctAnswers + ' correctly!');
  }
}

/********* Lab 3 ***********/

function guessingGame2() {

  var myStates = ['maryland', 'dc', 'connecticut'];
  var numberOfQuestions = 5;
  var questions = ['Have I ever done a triathlon?', 'Was I born in Seattle?', 'Do I have any children?', 'Do I like drinking whiskey?', 'Do I have a pet snake?']

  var yes_no_answers = [
    ['yes', 'no', 'yes', 'no', 'no'],   //Answers to questions array
    ['You are correct, ', 'That is incorrect, '], //Correct/incorrect responses
    [', I have done 2.', ', I was born in Maryland.', ', I have 3 kids.', ', I am more of a beer drinker.', ', I have a pet cat named Moxie.'] //Elaborations to questions
  ];
  var correctAnswers = 0; //to tally user's correct guesses for questions 1 - 7
  var totalPossibleCorrect = 7; //total number of possible correct answers

  var user = prompt('What\'s your name?');
  alert('Hi, ' + user + ', let\'s play some guessing games.');

  //Guessing game questions 1 - 5:
  for (var i = 0; i < questions.length; i++) {
    var answer = prompt(questions[i]);
    if (answer.toLowerCase() === yes_no_answers[0][i]) {
      correctAnswers++;
      alert(yes_no_answers[1][0] + user + yes_no_answers[2][i]);
    } else {
      alert(yes_no_answers[1][1] + user + yes_no_answers[2][i]);
    }
  }


  //Question Six
  var randomNum = Math.floor((Math.random() * 100) + 1); //random # between 1 and 100
  console.log('random num is ', randomNum);
  var remainingGuesses = 0;
  var totalGuessesNumberGame = 4;

  var userGuess = prompt('Guess a random number between 1 and 100');

  for(var guesses = 1; guesses < totalGuessesNumberGame; guesses++){
    if((userGuess < 0) || (userGuess > 100)){
      userGuess = prompt('Please enter a number between 1 and 100');
      guesses--;
    } else if(userGuess == randomNum) {
      correctAnswers++;
      alert('Well done! You guessed it in only ' + guesses + ' tries!');
      break;
    } else if(userGuess < randomNum){
      remainingGuesses = totalGuessesNumberGame - guesses;
      if(!remainingGuesses) { alert('Thanks for playing! The number was ' + randomNum);
    } else {
      userGuess = prompt('Try again. The number is higher than ' + userGuess + '. You have ' + remainingGuesses + ' remaining.' );
    }
  } else if(userGuess > randomNum) {
    remainingGuesses = totalGuessesNumberGame - guesses;
    if(!remainingGuesses) { alert('Thanks for playing! The number was ' + randomNum);
  } else {
    userGuess = prompt('Try again. The number is lower than ' + userGuess + '. You have ' + remainingGuesses + ' remaining.');
  }
} else {
  userGuess = prompt('Please enter a number between 1 and 100');
  guesses--;
}

}
//Question Seven
var answerSeven = prompt('Can you guess one of the states (besides Washington) that I have lived in?');
var guess = 1;
var totalGuessesStates = 6;

while(guess <= totalGuessesStates){
  if(myStates.indexOf(answerSeven.toLowerCase()) > -1) {
    correctAnswers++;
    break;
  } else {
    guess++;
    if(guess < totalGuessesStates){
      answerSeven = prompt('Sorry, that\'s not correct. Please Try again.');
    } else {
      break;
    }
  }
}
alert('I have lived in the following states: ' + myStates[0] + ', ' + myStates[1] + ', ' + myStates[2] + '. You answered ' + correctAnswers + ' out of ' + totalPossibleCorrect + ' answers correctly, ' + user);
}
