var words = ['tiger', 'horse', 'wolf', 'squirrel', 'giraffe'];

// Selecting random word to guess
function chooseWord () {
    return words[Math.floor(Math.random()*(words.length - 1))];
}

chooseWord();