# Events

## SWABTs
- [] Attach a listener to the entire document which waits for the document's content to be loaded
- [] Attach a listener to a button which waits for a `click` event and increments a number on the DOM
- [] Attach a `submit` listener to the DOM and render the user's text to the page.


## addEventListener
At the heart of attaching events is a method entitled `addEventListener`.  This can be called on a DOM element, giving that element the ability to listen for the event in question.  At minimum it takes two arguments, first a string of the event in question, then a function which will execute when the event is heard.
```js
const someForm = document.querySelector( 'form' )

someForm.addEventListener( 'submit', (eventObj) => {
    //all our fun form stuff here!
} )
```
Note the parameter in our callback to `addEventListner`.  When `addEventListener` invokes the function we give it, __*`addEventListener` will give that function an argument*__.  The argument given to the function is a JavaScript object containing information about the event itself.  

While not always needed, the event object _is REQUIRED when using forms_ as it can be used to prevent default behavior as well at provide data given by the user.  