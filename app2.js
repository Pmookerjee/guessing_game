var numberOfQuestions = 5;
var questions = ['Am I a boy?', 'Was I born in Seattle?', 'Do I have any children?', 'Do I like drinking whiskey?', 'Do I like to travel?']
var correctAnswers = ['no', 'no', 'yes', 'no', 'yes'];
var response = [
  ['You are correct, ', 'Sorry, that\'s not true, '],
  ['Nope, I was born in Washington DC, ', ', but that is not the correct answer.'],
  ['Yep, I have 3 boys, ', ''],
  ['Nope, but I am a beer snob, ', ''],
  ['Yes, it is my favorite thing to do, ', '']
];


function guessingGame() {

  for (var i = 0; i < questions.length; i++) {
    var answer = prompt(questions[i]);
    if (answer.toLowerCase() === correctAnswers[i]) {
      alert(response[i][0] + user + response[i++][1]);
    } else...

}
