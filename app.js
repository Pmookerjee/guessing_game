//There are two games here, guessingGame1 is for labs 1 and 2
//guessingGame2 on line 99 is for lab 3


function guessingGame1(){

  var correctAnswers = 0; //to tally user's correct guesses
  var user = prompt('What\'s your name?');

  alert('Hello ' + user + '. Welcome to my game!');
  guessMyState();
  guessMyFaveColor();
  guessMyBestSport();
  guessMyInstrument();
  guessMyLanguages();
  guessMyKidsNames();

  //Ask user a question
  //Take their answer as input; store it in a var
  //Validate their answer matches my answer
  //Depending on true or false, provide feedback

  //Question One
  function guessMyState(){
    var myAnswerOne = 'washington dc';
    var myState = prompt('What state am I from?');

    if(myState.toLowerCase() === myAnswerOne){
      alert('Wow. How did you know that?');
      correctAnswers ++;
    } else {
      alert('I am from ' + myAnswerOne + '.');
    }
  }

  //Question Two
  function guessMyFaveColor(){
    var myFaveColor = 'orange';
    var answerTwo = prompt('What is my favorite color?');
    if(answerTwo.toLowerCase() === myFaveColor){
      alert('You really know me well!');
      correctAnswers ++;
    } else {
      alert('My favorite color is ' + myFaveColor + '.');
    }
  }

  //Question Three
  function guessMyBestSport(){
    var myBestSport = 'snowboarding';
    var answerThree = prompt('What is my best sport?');
    if(answerThree.toLowerCase() === myBestSport){
      correctAnswers ++;
      alert('Yep! You\'re a superstar.');
    } else {
      alert('Close! My best sport is ' + myBestSport + '.');
    }
  }

  //Question Four
  function guessMyInstrument(){
    var myInstrument = 'drums';
    var answerFour = prompt('What instrument do I like to play?');
    if(answerFour.toLowerCase() === myInstrument){
      correctAnswers ++;
      alert('Badum bum bum... ching! Well done...');
    } else {
      alert('It happens to be the... drumroll... ' + myInstrument + '.');
    }
  }
  //Question Five
  function guessMyLanguages() {
    var myLanguages = ['french', 'gibberish'];
    var answerFive = [];
    answerFive[0] = prompt('What language do I speak?');
    answerFive[1] = prompt('What other language do I speak?');

    if(((answerFive[0].toLowerCase() === myLanguages[0]) || (answerFive[0].toLowerCase() === myLanguages[1])) && ((answerFive[1].toLowerCase() === myLanguages[0]) || (answerFive[1].toLowerCase() === myLanguages[1]))) {
      alert('You guessed it! You are amazing!');
      correctAnswers += 2;
    } else if (((answerFive[0].toLowerCase() === myLanguages[0]) || (answerFive[0].toLowerCase() === myLanguages[1])) || ((answerFive[1].toLowerCase() === myLanguages[0]) || (answerFive[1].toLowerCase() === myLanguages[1]))) {
      alert('Nice! You got one of them right! I speak ' + myLanguages[0] + ', and ' + myLanguages[1] + '.');
      correctAnswers++;
    } else {
      alert('I speak ' + myLanguages[0] + ', and ' + myLanguages[1] + '.');
    }
  }

  //Question Six
  function guessMyKidsNames() {
    var myKidsNames = ['adrian', 'soren', 'noah'];
    var userGuess = prompt('Here\'s another question: Guess one of my kids\' names...');
    if(myKidsNames.indexOf(userGuess.toLowerCase()) > -1){
      var son = myKidsNames.indexOf(userGuess.toLowerCase());
      correctAnswers ++;
      alert('You guessed ' + myKidsNames[son] + ' correctly. You guessed '  + correctAnswers + ' answers correctly!');
    } else {
      alert('Their names are ' + myKidsNames[0] + ', ' + myKidsNames[1] + ', ' + myKidsNames[2] + '. You guessed ' + correctAnswers + ' correctly!');
    }
  }
}

/********* Lab 3 ***********/
function guessingGame2() {

  var correctAnswers = 0; //to tally user's correct guesses for questions 1 - 7
  var totalPossibleCorrect = 7; //total number of possible correct answers

  var user = prompt('What\'s your name?');
  alert('Hi, ' + user + ', let\'s play some guessing games.');

  fiveQuestions();
  guessRandomNum();
  guessWhereIveLived();

  //Guessing game questions 1 - 5:
  function fiveQuestions(){

    var questions = ['Have I ever done a triathlon?', 'Was I born in Seattle?', 'Do I have any children?', 'Do I like drinking whiskey?', 'Do I have a pet snake?']

    var yes_no_answers = [
      ['yes', 'no', 'yes', 'no', 'no'],   //Answers to questions array
      ['You are correct, ', 'That is incorrect, '], //Correct/incorrect responses
      [', I have done 2.', ', I was born in Maryland.', ', I have 3 kids.', ', I am more of a beer drinker.', ', I have a pet cat named Moxie.'] //Elaborations to questions
    ];

    for (var i = 0; i < questions.length; i++) {
      var answer = prompt(questions[i]);
      if (answer.toLowerCase() === yes_no_answers[0][i]) {
        correctAnswers++;
        alert(yes_no_answers[1][0] + user + yes_no_answers[2][i]);
      } else {
        alert(yes_no_answers[1][1] + user + yes_no_answers[2][i]);
      }
    }
  }

  //Question Six
  function guessRandomNum(){
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
}

function guessWhereIveLived(){
  //Question Seven
  var myStates = ['maryland', 'dc', 'connecticut'];
  var userGuess = prompt('Can you guess one of the states (besides Washington) that I have lived in?');
  var guess = 1;
  var totalGuessesStates = 6;

  while(guess <= totalGuessesStates){
    if(myStates.indexOf(userGuess.toLowerCase()) > -1) {
      correctAnswers++;
      break;
    } else {
      guess++;
      if(guess < totalGuessesStates){
        userGuess = prompt('Sorry, that\'s not correct. Please Try again.');
      } else {
        break;
      }
    }
  }
  alert('I have lived in the following states: ' + myStates[0] + ', ' + myStates[1] + ', ' + myStates[2] + '. You answered ' + correctAnswers + ' out of ' + totalPossibleCorrect + ' answers correctly, ' + user);
 }
}
