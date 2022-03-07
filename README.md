# Hide and Seek

## Learning Objectives
- Identify and describe the core JavaScript types: strings, numbers, objects, arrays, undefined/null, and booleans.
- Describe the difference between let and const, and describe when each is useful.
- Describe the relationship between state and view in an application.
- Increment numerical state, stored in a let, in response to a user event (usually a click).
- Derive implicit numerical state using explicitly tracked numerical state. 
- When updating numerical state on click, update the DOM to reflect the new state to the user.
- Create an array of primitive values and access any item in that array by index using bracket notation
- Use document.getElementById  to ‘grab’ a DOM element by id
- Add an event listener to a 'grabbed' button element and call a function (console.log , alert , etc) inside that event listener.
- On click, manipulate the textContent, style.color, and style.backgroundColor  of a DOM element with a hard-coded string value
- On click, use classList.toggle() to add a css class to a DOM element.
- Describe the difference between declaring and calling a function.
- Describe the benefits and risks of both WET (write everything twice) and DRY (don't repeat yourself) code
- Write an impure function to bundle and reuse DOM manipulation that is repeated multiple times
- Use Math.random to get a random item from an array
- Use a truthy/falsey expression in an if/else statement to perform an action conditionally
- Describe the difference between (and give examples of) true  and truthy, false  and falsey values.

## Suggested Order
1) Call the handleGuess functions first inside event handlers
2) Pass the correct arguments to the handleGuess functions
3) Finish the handleGuess declaration

[Buggy Hide and Seek](https://github.com/alchemycodelab/buggy-js-hide-and-seek/)

### Live Example:
https://alchemycodelab.github.io/web-01-hide-and-seek/


| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        1 |
| See three hiding places, with a button beneath each of them.                               |        1 |

| Events . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On clicking a hiding place button, the total number of guesses increment                         |        1 |
| On clicking the correct hiding place button, the total number of correct guesses increment                       |        1 |
| On clicking the incorrect hiding place button, the number of incorrect guesses increments                       |        1 |
| On click, see the correct hiding place's image change, clearing out the previous correct guess style|1|

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| IMPURE: `getRandomHidingSpot() : returns random item from given array` | 2 |
| IMPURE: `handleGuess(userGuess, correctSpot)` | 2 |
