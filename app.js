


function guessingGame(){

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
