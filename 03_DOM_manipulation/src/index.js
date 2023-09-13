console.log("hello from index.js");
console.log(bookStore);
// CRUD
    // Retrieve
        // Accessing An Existing Element on the Page
        //! querySelector() -> can target by id, class, position, etc
        //! getElementById() -> only targets elements that have an id

            // TODO Create a function that sets the text content of the header to the bookstore name.
            // TODO Create a function that grabs all the divs from the footer. Render the bookstore name, address, and hours
        
        // Accessing Existing ElementS on the Page
        //! querySelectorAll() -> can target by id, class, position, etc
        //! getElementsByClassName() -> only targets elements that have an id
        //! getElementsByTagName() -> can select all elements that are of a specific html tag type (e.g. <p>)
        //* TO TRANSFORM A HTMLCollection OR NodeList into an Array use Array.from(collectionToTransformHere)
            
    

    // Create
        // Creating a new Node and Add it to the DOM
        //! document.createElement() -> takes a string representing the element to create (e.g. document.createElement("p"))
        //! append -> can append multiple elements at the same type (string, number, node, etc)
        //! appendChild -> more restictive, only one Node can be appended at the time
            //TODO Create a new Node with some random text and append it to the DOM

    // Update
        // Update Existing Content by Targeting the Node and then using:
        //! innerText -> is also aware of style and will not return the text of hidden elements, whereas textContent will.
        //! textContent -> gets the content of all elements, including <script> and <style> elements
        //! innerHTML -> includes the HTML markup and deserves a special WARNING
            //TODO Showcase the difference between innerText, textContent, innerHTML, outerHTML

    // Destroy
        // Remove a Node from the page
        //! remove() -> removes a node from the page
            // TODO Remove an element of your choice from the DOM


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
