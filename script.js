const suits = ["♦️", "♥️", "♠️", "♣️"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let deck = [];
let player1Stack = [];
let player2Stack = [];
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let fullDeck = document.querySelector(".full-deck");
let stack1 = document.querySelector(".stack1");
let stack2 = document.querySelector(".stack2");
let p1Card = document.querySelector(".player1");
let p2Card = document.querySelector(".player2");
let message = document.querySelector(".message");
let rules = document.querySelector(".rules");
let table = document.querySelector(".table")
let playedCard1, playedCard2, player
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


stack1.addEventListener("click", () => {
    if (player1Turn === true) {
        if (isInWar === false) {
            playedCard1 = player1Stack.shift();
            p2Card.innerText = "";
            p1Card.innerText = "";
            p1Card.innerHTML = playedCard1.suit + playedCard1.rank;
            stack1.style.backgroundImage = "url(https://openclipart.org/image/400px/180064)";
            stack1.innerText = player1Stack.length;
            message.innerHTML = "Player 2, click on your stack to make a move";
            player1Turn = false;
            table.style.backgroundImage = "url(https://wallpaperaccess.com/full/1429575.jpg)";
        } else if (isInWar === true) {
            warPlayedCard1 = player1Stack.splice(0, 4);
            p1Card.innerHTML = warPlayedCard1[3].suit + warPlayedCard1[3].rank;
            stack1.innerText = player1Stack.length;
            message.innerHTML = "Player 2, click your stack to add 4 more cards"
            player1Turn = false;
        } else {
            console.log("Something went wrong");
        }
    }
    // gameOver();
})

stack2.addEventListener("click", () => {
    if (player1Turn === false) {
        if (isInWar === false) {
            playedCard2 = player2Stack.shift()
            p2Card.innerHTML = playedCard2.suit + playedCard2.rank;
            stack2.style.backgroundImage = "url(https://openclipart.org/image/400px/143575)";
            stack2.innerText = player2Stack.length;
            comparison();
            player1Turn = true;
        } else if (isInWar === true) {
            warPlayedCard2 = player2Stack.splice(0, 4);
            p2Card.innerHTML = warPlayedCard2[3].suit + warPlayedCard2[3].rank;
            stack2.innerText = player2Stack.length;
            warcomparison();
            player1Turn = true;
        } else {
            console.log("Ooops... we have a problem");
        }
    }
    gameOver();
})



rules.addEventListener("click", () => {
    if (gameOn === true) {
        window.open("http://127.0.0.1:5502/rules.html", "popUpWindow", "height=500, width=600, left=200, top=300, location=no");
    } else {
        // console.log("bla");
    }
})


start.addEventListener("click", () => {
    if (gameOn === true) {
        table.style.backgroundImage = "url(https://wallpaperaccess.com/full/1429575.jpg)";
        shuffleDeck(); splitDeck();
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
}

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
        table.style.backgroundImage = "url(https://openclipart.org/image/400px/170127)";
    }
}

let warPlayedCard1 = [];
let warPlayedCard2 = [];

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
        // war();

    } else {
        console.log("baaad");
    }
}


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


