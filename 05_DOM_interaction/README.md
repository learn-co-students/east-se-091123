# Additional Practice: Interacting with the DOM using Events

## Learning Goals

- Create event listeners on DOM nodes using `addEventListener()`
- Manipulate the DOM in response to events

## Instructions

If you open up index.html in the browser, you'll find a small application. It has a few features:

* A Counter that increases by 1 each second
* Plus and Minus buttons that increment or decrement the counter
* A 'like' button (❤️) that adds a 'like' for the number that is currently
  displayed by the timer
* A comment box that adds comments when submitted

First, take a few minutes to explore and test out the behavior of the page.
Think about how each of the features must work. What must be happening
underneath each of these features?

The challenge is to reverse engineer these features and build them yourself,
using what you've learned about JavaScript and DOM Manipulation.

## Rewriting the functionality

To begin, comment out the script tag linking to `js/index.min.js` in the html
file. This will "shut off" the existing behaviors so you can begin recreating
them, using the `js/challenge.js` file to write your code. You can see the
`<script>` tag that loads this file just after the one for `index.min.js`.

Add the following features one by one, refreshing the page to see your
functionality working as you build.

> Note: These deliverables are written in the form of _User Stories_. They
> describe the features from the perspective of a user when they visit the page.

* As a user, I should see the timer increment every second once the page has
   loaded.
* As a user, I can manually increment and decrement the counter using the plus
   and minus buttons.
* As a user, I can 'like' an individual number of the counter. I should see the
   count of the number of 'likes' associated with that number displayed.
* As a user, I can pause the counter, which should:

   * pause the counter
   * disable all buttons except the pause button
   * switch the label on the button from "pause" to "resume"
  
* As a user, I should be able to click the "restart" button to restart the
   counter and re-enable the buttons.
* As a user, I can leave comments on my gameplay, such as: "Wow, what a fun
   game this is."

## Hint for the timer

If you're not sure how to create or pause a timer, look into:

* [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
* [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
* [`clearinterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
