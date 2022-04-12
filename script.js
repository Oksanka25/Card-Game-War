const suits = ["♦️", "♥️", "♠️", "♣️"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let deck = [];
let player1Stack = [];
let player2Stack = [];
let warPlayedCard1 = [];
let warPlayedCard2 = [];
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const fullDeck = document.querySelector(".full-deck");
const stack1 = document.querySelector(".stack1");
const stack2 = document.querySelector(".stack2");
const p1Card = document.querySelector(".player1");
const p2Card = document.querySelector(".player2");
const message = document.querySelector(".message");
const table = document.querySelector(".table")
const openBtn = document.getElementById("openModal");
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
let playedCard1, playedCard2, player;
let gameOn = true;
let isInWar = false;
let player1Turn = true;

let myValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
};

// Manipulations with the deck

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
}
function generateDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++)
            deck.push(new Card(suits[i], values[j], myValues[values[j]]))
    }
    fullDeck.innerText = deck.length
    message.innerHTML = "Click 'Start Game' to play"
}
generateDeck();

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = (Math.floor(Math.random() * deck.length));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

function splitDeck() {
    for (let i = 0; i < deck.length / 2; i++) {
        player1Stack.push(deck[i]);
    }
    stack1.innerText = player1Stack.length;

    for (let i = 26; i < deck.length; i++) {
        player2Stack.push(deck[i]);
    }
    stack2.innerText = player2Stack.length;

    deck.length = 0;
    fullDeck.innerText = deck.length;

    message.innerHTML = " Player 1, click on your stack to make a move"

}

//Main game - adding cards to the center and comparison

stack1.addEventListener("click", () => {
    if (player1Turn === true) {
        if (isInWar === false) {
            playedCard1 = player1Stack.shift();
            p2Card.innerText = "";
            p1Card.innerText = "";
            p2Card.style.backgroundImage = "url(Images/card_background.png)";
            p1Card.innerHTML = playedCard1.suit + playedCard1.rank;
            p1Card.style.backgroundImage = "url(Images/sun.png)";
            stack1.innerText = player1Stack.length;
            message.innerHTML = "Player 2, click on your stack to make a move";
            player1Turn = false;
            table.style.backgroundImage = "url(Images/green_table.png)";
        } else if (isInWar === true) {
            warPlayedCard1 = player1Stack.splice(0, 4);
            p1Card.innerHTML = warPlayedCard1[3].suit + warPlayedCard1[3].rank;
            p2Card.style.backgroundImage = "url(Images/card_background.png)";
            p2Card.innerHTML = "";
            stack1.innerText = player1Stack.length;
            message.innerHTML = "Player 2, click your stack to add 4 more cards"
            player1Turn = false;
        } else {
            console.log("Something went wrong");
        }
    }
})

stack2.addEventListener("click", () => {
    if (player1Turn === false) {
        if (isInWar === false) {
            playedCard2 = player2Stack.shift()
            p2Card.innerHTML = playedCard2.suit + playedCard2.rank;
            p2Card.style.backgroundImage = "url(Images/cloud.png)";
            stack2.innerText = player2Stack.length;
            comparison();
            player1Turn = true;
        } else if (isInWar === true) {
            warPlayedCard2 = player2Stack.splice(0, 4);
            p2Card.innerHTML = warPlayedCard2[3].suit + warPlayedCard2[3].rank;
            p2Card.style.backgroundImage = "url(Images/cloud.png)";
            stack2.innerText = player2Stack.length;
            warcomparison();
            player1Turn = true;
        } else {
            console.log("Ooops... we have a problem");
        }
    }
    gameOver();
})


// Buttons 

const openRules = () => {
    modal.style.display = "block";
};

const closeRules = () => {
    modal.style.display = "none";
    console.log("close");
}
openBtn.addEventListener("click", openRules)
closeBtn.addEventListener("click", closeRules)


start.addEventListener("click", () => {
    if (gameOn === true) {
        table.style.backgroundImage = "url(Images/green_table.png)";
        shuffleDeck(); splitDeck();
    } else {
        message.innerHTML = "The game has already started";
    }
})

reset.addEventListener("click", () => {
    document.location.reload();
})

// Comparison values of the cards in the battle

function comparison() {
    if (playedCard1.value > playedCard2.value) {
        player1Stack.push(playedCard1, playedCard2);
        message.innerHTML = "Player 1 has a higher card. Player 1, your move is next";
        stack1.innerText = player1Stack.length;

    } else if (playedCard1.value < playedCard2.value) {
        player2Stack.push(playedCard1, playedCard2);
        message.innerHTML = "Player 2 has a higher card. Player 1, your move is next";
        stack2.innerText = player2Stack.length;

    } else {
        message.innerHTML = "It is a war. Player 1, click your stack to add 4 more cards";
        isInWar = true;
        table.style.backgroundImage = "url(Images/camouflage_table.png)";
    }
}

// Comparison cards in the war

function warcomparison() {

    if (warPlayedCard1[3].value > warPlayedCard2[3].value) {
        player1Stack.push(warPlayedCard1[0], warPlayedCard1[1], warPlayedCard1[2], warPlayedCard1[3], warPlayedCard2[0], warPlayedCard2[1], warPlayedCard2[2], warPlayedCard2[3]);
        // player1Stack.push(warPlayedCard1, warPlayedCard2);
        message.innerHTML = "Player 1 has a higher card and won a war. Player 1, your move is next";
        stack1.innerText = player1Stack.length;
        isInWar = false;
        return;

    } else if (warPlayedCard1[3].value < warPlayedCard2[3].value) {
        player2Stack.push(warPlayedCard1[0], warPlayedCard1[1], warPlayedCard1[2], warPlayedCard1[3], warPlayedCard2[0], warPlayedCard2[1], warPlayedCard2[2], warPlayedCard2[3]);
        // player2Stack.push(warPlayedCard1, warPlayedCard2);
        message.innerHTML = "Player 2 has a higher card and won a war. Player 1, your move is next";
        stack2.innerText = player2Stack.length;
        isInWar = false;
        return;

    }
    else if (warPlayedCard1[3].value === warPlayedCard2[3].value) {
        message.innerHTML = "It is a war again. Player 1, click your stack to add 4 more cards"
        console.log("war #2");

    } else {
        console.log("baaad");
    }
}

// End of game and result

function gameOver() {
    if (isInWar === true) {
        if (player1Stack.length == 0 || player1Stack.length < 4) {
            message.innerHTML = "Game Over! Player 2 Won!";
        } else if (player2Stack.length == 0 || player2Stack.length < 4) {
            message.innerHTML = "Game Over! Player 1 Won!";
        } else {
            console.log("problem1");
        }
    } else {
        if (player1Stack.length == 0) {
            message.innerHTML = "Game Over! Player 2 Won!";
        } else if (player2Stack.length == 0) {
            message.innerHTML = "Game Over! Player 1 Won!";
        } else {
            console.log("problem");
        }
    }
}


