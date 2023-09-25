document.addEventListener('DOMContentLoaded', () => {
/////////////////////////////
// fetch functions
    // function fetchResource(url){
    //     return fetch(url)
    //     .then(res => res.json())
    // }

    // function deleteBook() {

    // }


/////////////////////////////
// Rendering functions
    // Renders Header
    function renderHeader(store){
        document.querySelector('h1').textContent = store.name
    }
    // Renders Footer
    function renderFooter(store){
        const footerDivs = document.querySelectorAll('footer div')
        footerDivs[0].textContent = store.name
        footerDivs[1].textContent = store.address
        footerDivs[2].textContent = store.hours
    }

    function renderBookCard(cardData) {
        // console.log(cardData)
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const img = document.createElement('img')
        const btn = document.createElement('button')
        const inpt = document.createElement('input')

        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$${cardData.price}`
        btn.textContent = 'Delete'
        inpt.value = cardData.inventory
        inpt.type = 'number'

        img.src = cardData.imageUrl
        li.className = 'list-li'
        
        // Add an eventListener to the input.
        // Pass the event listener a callback that performs a PATCH request.
        // Review the differences between a PUT and PATCH
        inpt.addEventListener('change', (event) => {
            const updatedInventory = {
                inventory: event.target.value
            }

            const respObj = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedInventory)
            }

            fetch(`http://localhost:3000/books/${cardData.id}`, respObj)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw resp.statusText
                }
            })
            .then((data) => console.log(data))
            .catch((error) => {
                // find error div on DOM
                // update the textContent of the div to the error message
                console.log(error)
            })
        } )
        //Event Listeners 
        btn.addEventListener('click',()=>{
            // Optimistic render
            // li.remove()
            
            const requestObj = {
                method: 'DELETE'
            }
            
            fetch(`http://localhost:3000/books/${cardData.id}`, requestObj)
            .then(resp => {
                if (resp.ok) {
                    // pessimistic render
                    li.remove()
                }
            })
                
        })
    
        li.append(h3,pAuthor,pPrice,img,btn,inpt)
        document.querySelector('#book-list').append(li)
    }


/////////////////////////////
// Event Handlers
    function handleForm(e){
        e.preventDefault()
        //Builds Book
        const book = {
            title: e.target.title.value,
            author:e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory:e.target.inventory.value,
            reviews: []
        }
        //optimistic rendering
        // renderBookCard(book)
        const requestObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json' wants json back in response
            },
            body: JSON.stringify(book)      
        }
        //post book invocation function 
        fetch('http://localhost:3000/books', requestObj)
        .then((resp) => {
            if (resp.ok) {
                return resp.json()
            } else {
                throw resp.statusText
            }
        })
        .then(newBookObj => {
            console.log('successful')
            renderBookCard(newBookObj)
            e.target.reset() 
        } )
        .catch(( error ) => console.log(error))

    }


/////////////////////////////
// Invoking functions    
    //initial store render 
    // fetchResource('http://localhost:3000/stores/1') //1st .then() returns a promise
    fetch('http://localhost:3000/stores/1')
        .then(resp => resp.json())
        .then(store => { //2nd .then()
            renderHeader(store)//rendering the data
            renderFooter(store)
        })
        .catch(e => console.error(e))

    //render response data => book
    // fetchResource('http://localhost:3000/books')
    fetch('http://localhost:3000/books')
        .then(resp => resp.json())
        .then(books => books.forEach(renderBookCard))
        .catch(e => console.error(e))

    document.querySelector('#book-form').addEventListener('submit', handleForm)

})