// Deliverable number 1
// 1. put in your own words
//     see all ramen images (from server) in an img tag on the page in the ramen-menu div

// 2. pseudocode

//  make a get request to the server to get all the ramen 
//     - "http://localhost:3000/ramens"
//     - convert to javascript object from json (json() method)
// iterate through the array
//    - for each element in the array create and img tag
//    - set the src attribute to the ramen image
//  find ramen menu
//  add img as a child to the ramen menu div

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
//  Deliverable #2
// 1. put in your own words
//  click on new ramen image display that ramens details on the existing elements on the DOM

// 2. pseudocode
// listen for click on the new image
//   - when that click happens 
//        - find the detail image element
//        - set src to the ramen's image we clicked on
//        - find h2 in ramen detail div
//        - change the innerText of the h2 to the Ramen's name
//        - find h3 in ramen detail div
//        - change the innerText to the ramen's restaurant
//        - find span with id of 'rating-display'
//        - change innerText to the ramen's rating
//        - find p with id of 'comment-display'
//        - change the innerText to the ramen's comment


// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

// 1. put in your own words
//  when the form is submitted add the image from the form to the ramen-menu div

// 2. pseudocode
//  find the form on the DOM
//  listen for the form to submit
//  When the submit happens
//     - get values in form and create an object that structured the same as what we got from the server
//  call renderOneRamen() passing in object with values from form


// 3. code!
const ramenMenu = document.querySelector('#ramen-menu')
const form = document.getElementById('new-ramen')
// console.log(form)
function renderOneRamen(ramenObj) {
// const renderOneRamen = (ramenObj) => {
    
  const img = document.createElement('img')
  img.src = ramenObj.image
  img.alt = ramenObj.name
  
  ramenMenu.append(img)
  // listen for the click on the img
  img.addEventListener('click', () => {
    // const detailImage = document.querySelector('div#ramen-detail > img.detail-image')
    // const detailImage = document.getElementById('detail-image')
    const detailMenu = document.getElementById('ramen-detail')
    const detailImage = detailMenu.querySelector('.detail-image')
    detailImage.src = ramenObj.image

    const detailName = document.getElementById('detail-name')
    detailName.innerText = ramenObj.name

    const detailRestaurant = document.querySelector('#detail-restaurant')
    detailRestaurant.innerText = ramenObj.restaurant

    const ratingDisplay = document.getElementById('rating-display')
    ratingDisplay.innerText = ramenObj.rating

    const commentDisplay = document.getElementById('comment-display')
    commentDisplay.innerText = ramenObj.comment 
  })
}

form.addEventListener('submit', (event) => {
  console.log(event.target.image.value)
  event.preventDefault()
  const name = event.target.name.value
  const restaurant = event.target.restaurant.value
  const image = event.target.image.value
  const rating = event.target.rating.value
  const comment = event.target['new-comment'].value
  const newRamen = {
    name: name,
    restaurant: restaurant,
    image: image,
    rating: rating,
    comment: comment
  }
  renderOneRamen(newRamen)
  event.target.reset()
  // const newRamen = {
  //   name,
  //   restaurant,
  //   image,
  //   rating,
  //   comment
  // }
})

fetch("http://localhost:3000/ramens")
.then(response => response.json()) // convert from json to js object
.then(ramenArray => (
  ramenArray.forEach(renderOneRamen) // iterate through ramenArray and call renderOneRamen for each element
))

