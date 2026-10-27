# Arcade Clicker Game

This application was created by me, **Luyanda Duma**, as a practical project to familiarize myself with **Visual Studio Code, HTML5, CSS3, and JavaScript (ES6)**. It serves as my very first step into building dynamic, interactive web applications from scratch, managing file systems, tracking browser states, and using version control with Git.

## About the Game
Arcade Clicker is a high-speed, reaction-based web game where your clicks translate directly into score points. The catch? You are racing against a tight clock, and you have to strategically decide whether to save your points or invest them into multipliers to boost your click efficiency.

## How to Play
1. **Start the Game:** Click the main green **"Click Me!"** button. The moment you make your first click, a **10-second countdown timer** begins.
2. **Earn Points:** Every click adds points to your current score based on your active "Click Power".
3. **Visit the Multiplier Shop:** While the timer is actively ticking, you can spend your earned score points to purchase upgrades:
   * **Buy +2 Power (Costs 15 points):** Permanently increases your click value by +2 points per click.
   * **Buy +5 Power (Costs 40 points):** Permanently increases your click value by +5 points per click.
4. **Game Over:** Once the timer hits `0s`, all actions freeze. If your final score breaks your previous record, your new **High Score** is saved directly into the browser's local memory (`localStorage`) so it remembers your achievement even if you close the tab.
5. **Play Again:** Click the orange **"Restart Game"** button to reset your score and try to beat your record!

## Technologies Explored
* **HTML5:** Structuring the core game layout, action buttons, and stat containers.
* **CSS3:** Creating a clean, centralized card-based layout using Flexbox, managing drop shadows, transitions, and hover states.
* **JavaScript:** Handling time intervals (`setInterval`), event tracking (`addEventListener`), dynamic score manipulation, UI state freezing, and persistence via browser storage.
