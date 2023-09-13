console.log(bookStore);
// CRUD
    // Retrieve
        // Accessing An Existing Element on the Page
        //! querySelector() -> can target by id, class, position, etc
        //! getElementById() -> only targets elements that have an id

            // TODO Create a function that sets the text content of the header to the bookstore name.
            // function addNameToHeader() {
            //     // find the h1 element with id of name
            //     const nameElement = document.getElementById('name')
            //     nameElement.textContent = bookStore.name
            // }

            // TODO Create a function that grabs all the divs from the footer. Render the bookstore name, address, and hours
        
        // Accessing Existing ElementS on the Page
        //! querySelectorAll() -> can target by id, class, position, etc 
        // return NodeList
        document.querySelectorAll('div.list')
        //! getElementsByClassName() -> only targets elements that have an id
        // return HTMLCollection
        document.getElementsByClassName('list')
        //! getElementsByTagName() -> can select all elements that are of a specific html tag type (e.g. <p>)
        document.getElementsByTagName('li')
        // return HTMLCollection
        //* TO TRANSFORM A HTMLCollection OR NodeList into an Array use Array.from(collectionToTransformHere)
            
    

    // Create
        // Creating a new Node and Add it to the DOM
        //! document.createElement() -> takes a string representing the element to create (e.g. document.createElement("p"))
        
        // divToAddOurParagraphTo.append(newElementNotOnDOM, "hello")
        //! append -> can append multiple elements at the same time (string, number, node, etc)
        //! appendChild -> more restictive, only one Node can be appended at the time
        //TODO Create a new Node with some random text and append it to the DOM
        const divToAddOurParagraphTo = document.querySelector('main > div.list')
        const ul = document.getElementById('book-list')

        const newElementNotOnDOM = document.createElement('p')
        newElementNotOnDOM.innerText = "some text content"
        divToAddOurParagraphTo.append(newElementNotOnDOM, "Some Text")
        // add element to the div before the ul
        // divToAddOurParagraphTo.insertBefore(newElementNotOnDOM, ul)

    // Update
        // Update Existing Content by Targeting the Node and then using:
        //! innerText -> is also aware of style and will not return the text of hidden elements, whereas textContent will.
        //! textContent -> gets the content of all elements, including <script> and <style> elements
        //! innerHTML -> includes the HTML markup and deserves a special WARNING
        //TODO Showcase the difference between innerText, textContent, innerHTML, outerHTML

        console.log("innerText: ", ul.innerText)
        console.log("textContent: ", ul.textContent)
        console.log("innerHTML: ", ul.innerHTML)

    // Destroy
        // Remove a Node from the page
        //! remove() -> removes a node from the page
            // TODO Remove an element of your choice from the DOM
        const listItemsToDelete = Array.from(ul.children)
        listItemsToDelete.forEach((element) => element.remove())

        // can use innerHtml to remove all the list items from unordered
        // ul.innerHTML = ''

// 💡 Exercise After Break

// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html structure for rendering
// that book and insert it into our webpage!

// function renderBook(book) 
// should create an li element that looks something like this:
// <li class="list-li">
//   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
//   <p>Marjin Haverbeke</p>
//   <p>$10.00</p>
//   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
//   <button>Delete</button>
// </li>

// company info
// bookstore info
// bookstore headers
function addNameToHeader() {
    // find the h1 element with id of name
    const nameElement = document.getElementById('name')
    nameElement.textContent = bookStore.name
}

function updateBookstoreHeader() {
    // find elements on DOM that need to be updated
    // change innerText of elements with bookStore objects info
    addNameToHeader()

    const locationElement = document.getElementById('location')
    locationElement.innerText = bookStore.location
    
    const numberElement = document.getElementById('number')
    numberElement.innerText = bookStore.number

}

updateBookstoreHeader()

const ulElement = document.getElementById('book-list')

bookStore.inventory.forEach(function(book){

    console.log(book)
    const newLi = document.createElement('li')
    newLi.classList.add('list-li')

    const newH3 = document.createElement('h3')
    newH3.innerText = book.title

    const newImg = document.createElement('img')
    newImg.src = book.imageUrl

    newLi.append(newH3, newImg)
    ulElement.appendChild(newLi)
    
})