
/*
    ARRAYS!
    An array is an *ordered* list of data
*/


// ✅ 1. Adding to the end of an array -> .push
// destructive!
// const theNumbers = [ 1,2,3,4,5 ]

//theNumbers.push( 'potato' ) // -> [ 1, 2, 3, 4, 5, 'potato' ]

//console.log( theNumbers )


// ✅ 2. Adding to the beginning of an array -> .unshift
// destructive!

// const theNumbers = [ 1,2,3,4,5 ]

// theNumbers.unshift( 'meow!' ) // -> [ 'meow!', 1, 2, 3, 4, 5 ]

// console.log( theNumbers )


// ✅ 3.  Remove from the end of an array -> .pop
// destructive!

// const theNumbers = [ 1,2,3,4,5 ]

// theNumbers.pop() // -> [ 1, 2, 3, 4 ]

// console.log( theNumbers )


// ✅ 4.  Remove from the beginning of an array -> .shift
// const theNumbers = [ 1,2,3,4,5 ]

// theNumbers.shift() // ->  [ 2, 3, 4, 5 ]

// console.log( theNumbers )


// ✅ 5.  Remove a number of elements from an array -> .slice
// non destructive!

// const theStrings = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six' ]
/*                                   
                                the starting index             
                                       |
                                       V       */
// const aNewArray = theStrings.slice( 0, 2 )
/*                                        ^
                                          |
                               the ending, NON inclusive        */
// console.log( 'the theString variable, not changed:', theStrings)
// console.log( 'the newArray that slice gives us', aNewArray )



// ✅ 6.  Modify an array by adding elements -> .splice
/*
    I'll take stuff out, it'll modify the array in place, and add stuff if you 
    want!
*/
// DESTRUCTIVE

// const theStrings = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six' ]

// const newArray = theStrings.splice( 0, 3, 'potato' )

// console.log( 'what splice gave us:', newArray )
// console.log( 'how is changed the array trying to do that:', theStrings )



// ✅ 7.  Creating a copy of an array -> the spread operator, i.e. "..."
/* For making a copy of an array ( or Object ) without creating a reference */

// const theStrings = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six' ]
// const theNums = [ 1,23,3,4 ]
// const newArray = [ ...theStrings ]

// const moreArray = [
//     ...theStrings.splice( 0, 1, 'meowmeow!' ),
//     'potato',
//     ...theStrings
// ]

//newArray.push( 'meow' )

// console.log( 'did it change the first one?', theStrings )
// console.log( 'our new array:', moreArray)


//  OBJECTS!
/* an unordered "key/value" pair data structure */


// ✅ 8.  Adding keys to an object -> dot & bracket notation

// const someObject = {}

// someObject.funfood = 'potato'
// someObject.mewo = 'lol'

// const aVariableContainingTheKey = 'funfood'

// console.log( someObject[ aVariableContainingTheKey ] )

/* What if we don't know what the keys are? */
// const theKeys = Object.keys( someObject )
// console.log( "the keys:", theKeys)
/* Object.keys, when given a object as an argument, will return an array of the
   object's keys */


// ✅ 9.  Deleting keys from an object -> "delete" keyword

// const someObject = { meow: 'cat sound', woof: 'dog sound' }
// console.log( someObject )

// delete someObject.woof

// console.log( someObject )



// ✅ 10. Creating a copy of an object -> the spread operator, i.e. "..."

// const someObject = { meow: 'cat sound', woof: 'dog sound' }

// const newObject = { 
//     ...someObject, 
//     moo: 'cow sound' 
// }

// console.log( newObject )




// ✅ 11. Iterating through an object -> "for in" loop

// const someObject = { meow: 'cat sound', woof: 'dog sound', moo: 'cow sound' }

// for( theKey in someObject ) {
//     console.log( someObject[ theKey ] )
// }


/*  All of these array methods, all work the same insofar as they take 
    a function as an argument */


// ✅ 12. Finding something in an array -> .find

// const theStrings = [ 'first', 'second', 'third' ]

/*  The callback function we give to find NEEDS TO RETURN TRUE OR FALSE */
// function thatWord( oneOfThoseStrings ) {
//     if( oneOfThoseStrings == 'second' ) {
//         return true
//     }
// }
// const theFound = theStrings.find( thatWord )






// ✅ 13. Filtering out an array -> .filter

/* the function we give to .filter NEEDS TO RETURN TRUE OR FALSE, so it knows
   what to filter out */

// const theStrings = [ 'first', 'second', 'third' ]

// const theFiltered = theStrings.filter( oneOfThoseStrings => {
//     if( oneOfThoseStrings != 'second' ) {
//         return true 
//     }
// } )

// console.log( theFiltered )




// ✅ 14. Creating a new array from another array -> .map

/*  The return value of the callback we give to map, GOES INTO THE NEW ARRAY */

// const theStrings = [ 'first', 'second', 'third' ]

// const newArray = theStrings.map( oneOfThoseStrings => {
//     return oneOfThoseStrings.toUpperCase()
// } )

// console.log( newArray )



// ✅ 15. Doing some work for every element in an array -> .forEach

/* The return value of the callback we give to .forEach MEANS NOTHING! */

const theStrings = [ 'first', 'second', 'third' ]

function sayMeow( string ) {
    console.log( 'meow' )
}

theStrings.forEach( sayMeow )


