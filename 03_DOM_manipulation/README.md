# DOM
## SWBAT
- [ ] Explain what the DOM is
- [ ] Traverse the DOM tree
- [ ] Select single dom elements with .querySelector() and -getElementById()
- [ ] Select multiple elements with .querySelectorAll() and .-getElementsByClassName()
- [ ] Add context with .textContent
- [ ] Create elements with .createElement
- [ ] Append elements to the dom with .appendChild and .append
- [ ] Explain the dangers of innerHTML and when it's safe to use
- [ ] Remove content with .remove

## Deliverables 
### Lecture 2
data.js contains Book Store data for the application. It’s loaded before our index.js giving us access to the variable bookStore. 

- Demo querySelector:    
    - Create a function that sets the text content of the header to the bookstore name.

- Demo querySelectorAll:   
    - Create a function that grabs all the divs from the footer. Render the bookstore name,, address, and hours 
- Demo createElement   
    - Iterate through bookdata.inventory (an array of book objects). For every object in the array create a li, h3 , 2 ptags, image, and button elements. 
    - Add a book title to the h3 text content, the author and price to the ptags, and ‘Delete’ to the button. 
    - Add the imageUrl to the img.src and a class to the li of ‘list-li.’ (This is for some css in our style sheet.)
    - Append the h2, ptags, image, and button to the li 
    - Select the ul with the id of ‘book-list’ and append the li
- Refactor:
    - Take the callback function out of the forEach and set it to a variable so it can be reused in other areas of our code. 


## Document Object Model
The DOM is an interface for web documents. A tree of Node objects that represent a web page. These Nodes allow access and change to the Document. 

```
//The window is an object with methods and properties attached to the DOM
window

//The Document is an object inside the window that allows us to manipulate the dom
document 

```

## Selecting dom elements
To manipulate the DOM, we need to use methods to traverse it and find the elements we are looking for. 


```
// Single elements
// Query Selector will traverse the DOM and return the first element of the matching tag, class, or id passed as an argument
//'tag' looks for the first matching tag
.querySelector('div')

// '.class' will look for the first matching class
.querySelector('.someClass')

// '#id' will look for the first matching id
.querySelector('#someID')

// getElementById traverse the dom and returns the first element with the matching id. IDs should be unique, so it should be the only element with that ID. Note: the '#' is not necessary. 
getElementById('someId')


// Multiple elements
// querySelectorAll gets multiple elements of the matching tag or class 
//It returns a NodeList, which can be iterated over with a forEach and for... loops. 
querySelectorAll('div')

// getElementsByTagName and getElementsByClassName get every element by the matching class/tag.
// They both return HTML collections which can only be iterated over with for... loops.
getElementsByTagName() 
getElementsByClassName()

```

## Changing and Creating DOM Elements
Once a DOM element is selected, there are several ways of changing the content in that Node.

```
const div = document.querySelector('div')

// Text content returns the full text of a node. It's less performance heavy and works for all nodes. 

div.textContent = 'some text'


// Inner text only grabs visible text is performance heavy and only works on htmlelements 
div.innerText = 'some text'

// createElement creates a new element when provided a tag name
// A created element can be set with content just as a element selected by the dom can.
const newDiv = document.createElement('div')
newDiv.textContent = 'my text'

// innerHTML can add HTML content to an element. Use of this should be limited as it's slow, it clears out everything, removes event listeners, and most importantly, is vulnerable to cross-site-scripting attacks

div.innerHTML = `
 <p> use this with caution </p>
`

```


## Removing elements
Once selected, elements can be removed in a couple ways.

```
// will remove the element
div.remove()

// will clear the element of all it's nested children
div.innerHTML = ''

```