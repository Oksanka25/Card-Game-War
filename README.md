# WAR (Card Game)
## Project Description
It is a browser ineractive game which objective is to win all of the cards.
# User Stories
- As a user, I want to be able to have a button to start and reset a game.
- As a user, I want to be able to click on my deck of cards and have 1 card randomly opened.
- As a user, I want to be able to have my card and my opponent's card to be compared and have these 2 cards to be moved to the side of the player which card was higher.
- As a user, I want to be able to know when it is a war (in case of a tie).
- As a user, I want to be able to add 3 more cards unopened and the 4th opened to compare with my opponents card.
- As a user, I want to be able to know which player wins (whoever collects all the cards first) and when it is the end of the game.

## MVP Goals
- Create buttons Start Game and Reset Game.
- Open 1 card from the player's deck on click.
- Compare Player 1 and Player 2 cards.
- Move both cards to the deck of the player with higher card.
- In case of war (a tie) each player adds 3 cards unopened and 1 opened.
- Have a winner and end the game when 1 player has a full deck. 

## Stretch Goals
- Have a full deck and have it divided in half between 2 players when the game starts.
- Create a war layout(different back ground in case of war).
- Add a track how many wars each player won.
- Show the number of cards in the each player's deck.

## Stretch Goal ++
- Have a computer as a Player 1 

# War (Card Game) - MVP

## MVP Project Description

War is a browser based game that has many variations and rules. This version is the most standard one with 2 Players and the winner who has managed to collect all the cards during the game. This game is created using Javascript, HTML and CSS.

<img width="932" alt="image" src="https://user-images.githubusercontent.com/101350351/162034883-0dfcd8d7-9dbe-497a-bf9d-86e9aeb72344.png">


## MVP Wireframes

## Layout
The Layout is a casino table. 

## Buttons 
There are 3 buttons on the right side of the game field:
- Start Game: this button will initialize splitting a fuld deck of cards into 2 ( 1/2 for each player) and a text will show up saying click on your deck to paly the game.
- Reset Game: this button will start the game all over in the middle if the current game.
- Rules: this button will invoke a pop up window with the rules of the game. 

![photo_2022-04-06 12 28 47](https://user-images.githubusercontent.com/101350351/162023088-310ea4dd-471f-4243-bafb-b43b35834d94.jpeg)

## Game Section
The game has 4 sections:
- Full deck of cards: When the game starts, 16 cards go to each player.
- Player 1 section and their cards: When Player receives their deck of cards, they can click on it and 1 card should be taken off his deck and opened in the comparison section.
- Player 2 section and their cards: After Player 1 clicked on their deck and opened 1 card, Player 2 can do the same.
- Comparison section: When both Players clicked on their card decks, 2 cards should show up in the comparison section. Player with the higher card takes 2 cards from the comparison section. If 2 cards in a comparison section match, it is a war and each player has to click on their deck 4 times to add 3 cards face down and 1 (the last one) face up. And these 2 last cards should be compared.


![photo_2022-04-06 12 49 22](https://user-images.githubusercontent.com/101350351/162026475-4558a6f0-3c7b-48c3-b4c2-d7249968e9d9.jpeg)

## The End of The Game

Once the Game is completed another window will pop up that will display who is a winner and will offer to Play again

![image](https://user-images.githubusercontent.com/101350351/162034180-61f31db2-8375-4a3e-a73d-e258d5e9a6ab.png)

## Unsolved Problems


## Future Goals and Implementations


