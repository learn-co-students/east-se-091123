

let addToy = false;

const baseURL = 'http://localhost:3000'

const toysURL = baseURL + '/toys'

// fetch returns a promise!
fetch( toysURL )
    .then( r => r.json() ) 

    .then( toysArray => {

        toysArray.forEach( renderToy )
    } ) 


function renderToy( toyObject ) {
    // make a "card", i.e. a div
    const div = document.createElement( 'div' )
    div.className = 'card'
    // put the toyObject's info in other elements which will go in
    // our new "card"
    // new elements
    const h2 = document.createElement( 'h2' )
    h2.innerText = toyObject.name

    const img = document.createElement( 'img' )
    img.src = toyObject.image
    img.className = 'toy-avatar'

    const p = document.createElement( 'p' )
    p.innerText = toyObject.likes + " Likes"

    const button = document.createElement( 'button' )
    button.innerText = 'Like ❤️'
    button.className = 'like-btn'
    button.id = toyObject.id

    button.addEventListener( 'click', updateLikes )

    // append the other elements to the first div, i.e. the "card"
    div.append( h2, img, p, button )
    // append the "card" to the page
    const toysContainer = document.getElementById( 'toy-collection' )
    toysContainer.append( div )
}

function updateLikes( eventObj ) {
    // find the element we wish you change
    const theCardWeClickedOn = eventObj.target.parentElement
    const likesContainer = theCardWeClickedOn.querySelector( 'p' )

    // grab the text we're trying to change
    const oldString = likesContainer.innerText

    // isolate the number from the string
    const stringSplitUpIntoAnArray = oldString.split( ' ' )

    // add one to that number
    // ++stringSplitUpIntoAnArray[0] // <- shorthand for next two lines
    const theOldNumber = stringSplitUpIntoAnArray[0]
    stringSplitUpIntoAnArray[0] = parseInt( theOldNumber ) + 1

    // changing the DOM back to the new string
    const theNewString = stringSplitUpIntoAnArray.join( ' ' )
    likesContainer.innerText = theNewString
}


const newToyForm = document.querySelector( '.add-toy-form' )

newToyForm.addEventListener( 'submit', e => {
    // prevent the default form behavior
    e.preventDefault()

    // gather data from what the user input into the form
    const newName = e.target.name.value
    const newImage = e.target.image.value
    // assume no one likes this toy to start
    const newLikes = 0
    
    // construct a new JavaScript object for the new toy
    const newToy = {
        name: newName,
        image: newImage,
        likes: newLikes
    }

    // pass that object to our function which puts toys on the DOM
    renderToy( newToy )

} )



document.addEventListener("DOMContentLoaded", () => {
    atttachHideAndSeekListener()
});


function atttachHideAndSeekListener() {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
}


