## React 2048

2048 is a tile-sliding game where the objective is to merge like-colored tiles by using the arrow keys to slide the tiles in their respecive direction. As colored tiles merge, they'll change color away from green hues that increment analogously to warmer hues. The objective is to merge tiles that result in a red tile; the 2048 analog to my version. As one merges tiles, they will gain points relative to the value of sum of the two merged tiles (e.g. two green tiles worth two points merge to add 4 points to the score, two blue merge to add 8 etc...

[Click here to play the game](https://timefor2048.herokuapp.com)

This version of 2048 is built with React from a previous vanilla JS build I made (can be found here: https://github.com/TimeForZeros/Game-2048)

### Extra Features Added to This Build

#### Single Page Application
Resources are dynamically loaded when needed.

### Leaderboard
This version of the game is connected to MongoDB database to post and retrieve scores.
The top 10 scores can be seen on the leaderboards page.

### Swipe Functionality
For mobile users, swipe functionality has been added so the game can be played by swiping a direction (Up, Down, Left, Right) and the tiles sliding in that direction.

### Features in Progress

General styling and including media queries for a more mobile-friendly experience.

