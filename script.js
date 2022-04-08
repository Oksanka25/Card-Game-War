const suits = ["♦️", "♥️", "♠️", "♣️"];
const values = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = [];
let player1Stack = [];
let player2Stack = [];
let start = document.querySelector(".start");
let gameOn = true;
let fullDeck = document.querySelector(".full-deck");
let stack1 = document.querySelector(".stack1");
let stack2 = document.querySelector(".stack2");
let p1Card = document.querySelector(".player1");
let p2Card = document.querySelector(".player2");
let message = document.querySelector(".message");




class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
function generateDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++)
            deck.push(new Card(suits[i], values[j]))
    }
    fullDeck.innerText = deck.length
    message.innerHTML = "Click Start Game to play"
}
generateDeck();

// fullDeck.innerText = (deck[0].suit + deck[0].value);


function splitDeck() {
    for (let i = 0; i < deck.length / 2; i++) {
        player1Stack.push(deck[i]);
    }
    stack1.innerText = player1Stack.length;

    for (let i = 18; i < deck.length; i++) {
        player2Stack.push(deck[i]);
    }
    stack2.innerText = player2Stack.length;

    deck.length = 0;
    fullDeck.innerText = deck.length;

    message.innerHTML = " Player 1: Click on your stack to make a move"

}

// console.log(player2Stack, player1Stack);

stack1.addEventListener("click", () => {
    for (let i = 0; i < player1Stack.length; i++) {
        let j = (Math.floor(Math.random() * player1Stack.length));
        let temp = player1Stack[i];
        player1Stack[i] = player1Stack[j];
        player1Stack[j] = temp;
        p1Card.innerText = (player1Stack[j].suit + player1Stack[j].value)

    }
    message.innerHTML = "Player 2: Your move"
})

stack2.addEventListener("click", () => {
    for (let i = 0; i < player2Stack.length; i++) {
        let j = (Math.floor(Math.random() * player2Stack.length));
        let temp = player2Stack[i];
        player2Stack[i] = player2Stack[j];
        player2Stack[j] = temp;
        p2Card.innerText = (player1Stack[j].suit + player2Stack[j].value)
    }
    comparison()
})


start.addEventListener("click", () => {
    if (gameOn === true) {
        shuffleDeck(); splitDeck();
    } else {
        ///message
    }
})

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = (Math.floor(Math.random() * deck.length));
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function comparison() {
    if (p1Card.value > p2Card.value) {
        player1Stack.push(p1Card + p2Card);

    } else if (p1Card.value < p2Card.value) {
        player2Stack.push(p1Card + p2Card)
    } else {
        console.log("bla");
    }
}