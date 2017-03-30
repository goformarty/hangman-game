var words = ['tiger', 'horse', 'wolf', 'squirrel', 'giraffe'];

function chooseWord() {
    return words[Math.floor(Math.random() * (words.length))];
}

function blanksFromAnswer ( answerWord ) {  
    var result = ""; 
    for ( var i in answerWord ) {
        result += "_";
    }
    return result;
}

function alterAt ( n, c, originalString ) {
    return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
}

function guessLetter( letter, shown, answer ) {
    var checkIndex = 0;
    
    checkIndex = answer.indexOf(letter);
    while ( checkIndex >= 0 ) {
        shown = alterAt( checkIndex, letter, shown );
        checkIndex = answer.indexOf(letter, checkIndex + 1);
    }
    return shown;
}