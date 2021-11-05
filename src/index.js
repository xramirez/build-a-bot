const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');

//Be able to read from a file

function playGame() {
    let tree = fs.readFileSync('tree.json');
    let root = JSON.parse(tree);
    //console.log(root);

    let node = root;
    let input = "";
    let isGuess = false;

    while (isGuess == false) {
        input = prompt(`${node.question} `).toLowerCase();
        if (input == 'yes') {
            node = node.yes;
            //console.log(node);
        }
        else if (input == 'no') {
            node = node.no;
            //console.log(node);
        }
        else
            console.log("Make sure you answer with a yes or a no! Maybe doesn't cut it...");
        for (let options in node) {
            if (options == 'guess') {
                while (true) {
                    input = prompt(`${node.guess} `).toLowerCase();
                    if (input == 'yes')
                        return true;
                    else if (input == 'no')
                        return false;
                    else   
                        console.log("Make sure you answer with a yes or a no! Saying maybe doesn't cut it...")
                }
            }
        }
    }
}

function startAndLoop() {
    console.log("Welcome! This is the Pet Guessing Bot!\n\nGuess an animal that you'd usually have as a pet.");
    console.log("We're going to ask you a list of questions to try and guess what kind of animal you're thinking of!")
    console.log("You must either with answer with either yes or no!\n\nReady? Let's get down to it:");
    let repeatGame = true;
    while (repeatGame == true) {
        let gameWon = playGame();
        let input = ""
        if (gameWon == true)
            console.log("Yay! Thanks for playin'!");
        if (gameWon == false)
            console.log("Looks like you've got a pet we didn't even think of!");
        input = prompt("Would you like to play again? ")
        if (input == 'yes') {
            console.log("Perfect! Let's do this:\n\n\n");
        }
        else if (input == 'no') {
            console.log("We're sad to see you go :( Thanks for playing!");
            repeatGame = false;
        }
        else
        {
            console.log("Well, you didn't say yes, so we'll call it for now. See you next time!");
            repeatGame = false;
        }
    }
}

startAndLoop()
//console.log(root.question)