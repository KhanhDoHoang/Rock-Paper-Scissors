let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}
// console.log(getComputerChoice());

function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    }
    if (letter === "p") {
        return "Paper"
    }
    return "Scissors";
}

function wins(userChoice, computerChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    console.log("win");
    console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + (smallUser) + " beats " + convertToWord(computerChoice) + (smallComp) + ". You wins! 🐱‍👤🐱‍🐉🐱‍🐉";
    userChoice_div.classList.add('green-glow');
    setTimeout(function () {
        userChoice_div.classList.remove('green-glow')
    }, 1000)
}

function lose(userChoice, computerChoice) {
    computerScore++;
    console.log("loses");
    console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + (smallUser) + " loses to " + convertToWord(computerChoice) + (smallComp) + ". You loses..🐱‍💻🐱‍💻😜";
    userChoice_div.classList.add("red-glow");
    setTimeout(() =>
        userChoice_div.classList.remove('red-glow'), 1000)
}

function draw(userChoice, computerChoice) {
    console.log("draw");
    console.log(userScore);
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + (smallUser) + " equals " + convertToWord(computerChoice) + (smallComp) + ". It's a draw!";
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function () {
        userChoice_div.classList.remove('gray-glow')
    }, 1000)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("Comp choice: " + computerChoice);
    console.log("User choice: " + userChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

game("c");

function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    })

    paper_div.addEventListener("click", function () {
        game("p");
    })

    scissor_div.addEventListener("click", function () {
        game("s");
    })
}

main();