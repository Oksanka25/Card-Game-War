# WAR (Card Game)
## Project Description
It is a browser interactive game which objective is to win all of the cards. Each player reveals the top card of their deck — this is a "battle"—and the player with the higher card takes both of the cards played and moves them to their stack. If the two cards played are of equal value, then there is a "war". Both players place the next three cards face down and then another card face-up. The owner of the higher face-up card wins the war and adds all the cards on the table to the bottom of their deck.

<img width="1029" alt="image" src="https://user-images.githubusercontent.com/101350351/162832094-2f5f89b0-5ddc-4397-81cd-c6a797db8388.png">

## Built with

This game is created using Javascript, HTML and CSS.

## Getting started

It is a browser game that can be run by any browser on any device that supports a browser.

Folllow this link to play:
https://oksanka25.github.io/Project-1/

## Layout

The Layout is a casino table. 

## Game Executing & Buttons 

There are 3 buttons at the top of the game field:
- Start Game: this button will initialize splitting a full deck of cards into 2 ( 1/2 for each player) and a text will show up saying click on your deck to play the game.
- Reset Game: this button will start the game all over (even in the middle if the current game),  so the main deck is full again and Player needs to press Start Game to start a game.
- Rules: this button will invoke a pop up window with the rules of the game. 

<img width="1079" alt="image" src="https://user-images.githubusercontent.com/101350351/163057071-b812e04d-8808-4e78-aee4-b7108d3d2499.png">

## Game Sections & Game Flow

The game consists of 4 sections:
- Full deck of cards (52): When the game starts, 26 cards go to each player.
- Player 1 section and their cards: When Player receives their stack of cards, they can click on it and 1 card will be wathdrwan from his stack and opened in the comparison section.
- Player 2 section and their cards: After Player 1 clicked on their stack and opened 1 card, Player 2 can do the same.
- Comparison section: When both Players clicked on their card stacks, 2 cards will show up in the comparison section for a Battle. Player with the higher card wins the battle and takes those 2 cards from the comparison section to their stack. If 2 cards in a comparison section match, it is a war and each player has to click on their stack to add 4 cards - last card will show up for comparison. Player with the higher card wins the war. If cards match in the war, player do the previous step again.

<img width="948" alt="image" src="https://user-images.githubusercontent.com/101350351/163052730-587a383e-529a-43a4-9335-b3addcaca29f.png">


## The End of The Game

Once the Game is completed another window message will display who is a winner and will offer to Play again

![image](https://user-images.githubusercontent.com/101350351/163185238-04d5dcbb-6ef2-4fb8-af71-6a73dc07dc65.png)

## Usage

This game can be used as a great time-killer when someone wants to relax and just play the game that doesn't involve much thinking.

## Unsolved Problems

The problem that remains unsolved for now is the ability of the players to see the process how they add their cards (4) during the war.
Also, it is not optimized for different screen size very well.

## Future Goals and Implementations

- Computerise Player 1;
- Make moving cards more visual;
- Keep track of wins and loses for each player.

