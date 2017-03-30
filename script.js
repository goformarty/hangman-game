var words = ['tiger', 'horse', 'wolf', 'squirrel', 'giraffe'];
var randomWord =  words[Math.floor(Math.random()*(words.length - 1))];

var str = '';
var count = 0;
var answerArray = [];


function blanksFromAnswer() {
    
    for (var i=0; i<randomWord.length; i++) {
      answerArray[i]='_';
    }
    str = answerArray.join(' ');
    return str + " " + answerArray;
}

blanksFromAnswer(randomWord);