const suits = ["♦️", "♥️", "♠️", "♣️"];
const values = [6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let deck = [];
let player1Stack = [];
let player2Stack = [];
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let gameOn = true;
let fullDeck = document.querySelector(".full-deck");
let stack1 = document.querySelector(".stack1");
let stack2 = document.querySelector(".stack2");
let p1Card = document.querySelector(".player1");
let p2Card = document.querySelector(".player2");
let message = document.querySelector(".message");
let rules = document.querySelector(".rules");
let playedCard1, playedCard2, player

let myValues = {
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

console.log(deck);

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

    message.innerHTML = " Player 1, click on your stack to make a move"

}

// console.log(player2Stack, player1Stack);

stack1.addEventListener("click", () => {
    playedCard1 = player1Stack.shift()
    p1Card.innerHTML = playedCard1.suit + playedCard1.rank;
    stack1.style.backgroundImage = "url(https://openclipart.org/image/400px/180064)";
    stack1.innerText = player1Stack.length;
    console.log(playedCard1);
    message.innerHTML = "Player 2, click on your stack to make a move"
})

stack2.addEventListener("click", () => {
    playedCard2 = player2Stack.shift()
    p2Card.innerHTML = playedCard2.suit + playedCard2.rank;
    stack2.style.backgroundImage = "url(https://openclipart.org/image/400px/143575)";
    stack2.innerText = player2Stack.length;
    console.log(playedCard2);
    comparison();
})



rules.addEventListener("click", () => {
    if (gameOn === true) {
        window.open("http://127.0.0.1:5502/rules.html", "popUpWindow", "height=500, width=600, left=200, top=300, location=no");
    } else {
        console.log("bla");
    }
})


start.addEventListener("click", () => {
    if (gameOn === true) {
        shuffleDeck(); splitDeck();
        console.log(player1Stack);
    } else {
        message.innerHTML = "The game has already started";
    }
})

reset.addEventListener("click", () => {
    document.location.reload();
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

function comparison(event) {
    // event.preventDefault()
    if (playedCard1.value > playedCard2.value) {
        player1Stack.push(playedCard1, playedCard2);
        message.innerHTML = "Player 1 has a higher card. Player 1, your move is next";
        stack1.innerText = player1Stack.length;
        // p1Card.innerHTML = "";
        // p2Card.innerHTML = "";

    } else if (playedCard1.value < playedCard2.value) {
        player2Stack.push(playedCard1, playedCard2);
        message.innerHTML = "Player 2 has a higher card. Player 1, your move is next";
        stack2.innerText = player2Stack.length;
        // p1Card.innerHTML = "";
        // p2Card.innerHTML = "";

    } else {
        message.innerHTML = "It is a war. Player 1, click your stack to add 4 more cards"
        war();
    }

}

let warPlayedCard1 = [];
let warPlayedCard2 = [];

function war() {
    stack1.addEventListener("click", () => {
        warPlayedCard1 = player1Stack.splice(1, 4);
        p1Card.innerHTML = warPlayedCard1[3].suit + warPlayedCard1[3].rank;
        stack1.innerText = player1Stack.length;
        message.innerHTML = "Player 2, click your stack to add 4 more cards"
        console.log(warPlayedCard1);
    })
    stack2.addEventListener("click", () => {
        warPlayedCard2 = player2Stack.splice(1, 4);
        p2Card.innerHTML = warPlayedCard2[3].suit + warPlayedCard2[3].rank;
        stack2.innerText = player2Stack.length;
        console.log(warPlayedCard2);
        warcomparison();
    });

}


function warcomparison() {

    if (warPlayedCard1[3].value > warPlayedCard2[3].value) {
        player1Stack.push(warPlayedCard1, warPlayedCard2);
        message.innerHTML = "Player 1 has a higher card and won a war. Player 1, your move is next";
        stack1.innerText = player1Stack.length;

    } else if (warPlayedCard1[3].value < warPlayedCard2[3].value) {
        player2Stack.push(warPlayedCard1, warPlayedCard2);
        message.innerHTML = "Player 2 has a higher card and won a war. Player 1, your move is next";
        stack2.innerText = player2Stack.length;

    }
    else if (warPlayedCard1[3].value === warPlayedCard2[3].value) {
        console.log("war #2");
        war();
    } else {
        console.log("baaad");
    }
}


function gameOver() {
    if (stack1 === null) {
        message.innerHTML = "Player 1 Won! Game Over!";
    } else if (stack2 === null) {
        message.innerHTML = "Player 2 Won! Game Over!";
    } else {
        console.log("problem");
    }
}

gameOver();

