


document.addEventListener( 'DOMContentLoaded', () => {

    const headerElement = document.querySelector( 'h1' )
    headerElement.innerText = 'POTATO!'

} )


const theButton = document.querySelector( 'button' )

theButton.addEventListener( 'click', (e) => {
    console.log( e.target )
    // find the element in question, that span.
    const theSpanElement = document.querySelector( 'span' )

    // increment operator!
    // theSpanElement.innerText++

    // the more verbose way!
    const theNumberAsString = theSpanElement.innerText
    const theNumberAsInteger = parseInt( theNumberAsString )
    const newNumber = theNumberAsInteger + 1
    theSpanElement.innerText = newNumber
} )



const theForm = document.querySelector( 'form' )

function theFormPlan( e ){
    // preventing the way forms worked long long ago
    e.preventDefault()

    // we need to get what the user typed in the input field.
    theTextFromTheUser = e.target.content.value

    // make a new element for our text
    const div = document.createElement( 'div' )

    // put the text in the new element
    div.innerText = theTextFromTheUser

    // append that new element somewhere on the DOM
    const contentContainer = document.querySelector( '.content-container' )
    contentContainer.append( div )

    // this will erase what is in the input fields
    e.target.reset()
}

theForm.addEventListener( 'submit', theFormPlan )
