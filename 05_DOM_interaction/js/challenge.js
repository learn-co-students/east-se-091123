const counterElement = document.getElementById( 'counter' )
const plusButton = document.getElementById( 'plus' )
const minusButton = document.getElementById( 'minus' )
const formElement = document.getElementById( 'comment-form' )
const commentsContainer = document.getElementById( 'list' )
const heartButton = document.getElementById( 'heart' )
const likesContainer = document.querySelector( '.likes' )
const pauseButton = document.getElementById( 'pause' )
const submitButton = document.getElementById( 'submit' )

let intervalID = setInterval( increment, 1000 )

let paused = false

pauseButton.addEventListener( 'click', () => {
    // DRY refactor
    paused = !paused
    const buttons = [ plusButton, minusButton, heartButton, submitButton ]
    buttons.forEach( button => button.disabled = paused )
    pauseButton.innerText = paused ? 'resume' : 'pause'
    if ( paused ) {
        clearInterval( intervalID )
    } else {
        intervalID = setInterval( increment, 1000 )
    }
    //  TOTALLY NOT DRY EXAMPLE
    // if( !paused ) {
    //     plusButton.disabled = false
    //     minusButton.disabled = false
    //     heartButton.disabled = false
    //     submitButton.disabled = false
    //     intervalID = setInterval( increment, 1000 )
    //     pauseButton.innerText = 'pause'
    // } else {
    //     plusButton.disabled = true
    //     minusButton.disabled = true
    //     heartButton.disabled = true
    //     submitButton.disabled = true
    //     clearInterval( intervalID )
    //     pauseButton.innerText = 'resume'
    // }
    
} )


heartButton.addEventListener( 'click', () => {
    const theNumber = counterElement.innerText
    const foundLi = document.getElementById( `num-${theNumber}` )
    if( foundLi ) {
        const thatSpan = foundLi.querySelector( 'span' )
        thatSpan.innerText++
        if( thatSpan.innerText == '2' ) {
            foundLi.append( 's' )
        }
    } else {
        const theText = theNumber + " has been liked <span>1</span> time"
        const li = document.createElement( 'li' )
        li.id = `num-${theNumber}`
        li.innerHTML = theText
        likesContainer.append( li )
    }
} )

formElement.addEventListener( 'submit', (e) => {
    e.preventDefault()
    // get that text the user gave us
    const theText = e.target.comment.value 
    // make a new element for the text
    const p = document.createElement( 'p' )
    // put that text in a new element
    p.innerText = theText
    // append the new element on the DOM
    commentsContainer.append( p )
    e.target.reset()
} )

minusButton.addEventListener( 'click', () => counterElement.innerText-- )

plusButton.addEventListener( 'click', increment )


function increment() {
    counterElement.textContent++
}