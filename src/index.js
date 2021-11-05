const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');

//Be able to read from a file

function playGame() {
    let tree = fs.readFileSync('test.json');
    let root = JSON.parse(tree);
    console.log(root);

    let node = root;
    let input = "";
    let isGuess = false;

    while (isGuess == false) {
        for (let options in node) {
            if (options == 'guess') {
                input = prompt(`${node.guess} `).toLowerCase();
                if (input == 'yes')
                    return true;
                else if (input == 'no')
                    return false;
            }
        }
        input = prompt(`${node.question} `).toLowerCase();
        if (input == 'yes') {
            node = node.yes;
            console.log(node);
        }
        else if (input == 'no') {
            node = node.no;
            console.log(node);
        }
        else
            console.log("wtf dude");
    }
}

function startAndLoop() {
    console.log("Welcome! This is the Pet Guessing Bot!\n Guess an animal, specifically an animal you'd usually have as a pet.");
    console.log("We're going to ask you a list of questions to try and guess what kind of animal you're thinking of!")
    console.log("You must either with answer with either yes or no!\nReady? Let's get down to it:");
    let repeatGame = true;
    while (repeatGame) {
        let gameWon = playGame();
        let input = ""
        if (gameWon == true)
            console.log("Yay! Thanks for playin'!");
        if (gameWon == false)
            console.log("Looks like you've got a pet we didn't even think of!");
        input = prompt("Would you like to play again?" )

    }
}

startAndLoop()
//console.log(root.question)