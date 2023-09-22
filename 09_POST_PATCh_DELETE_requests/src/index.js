document.addEventListener('DOMContentLoaded', () => {
/////////////////////////////
// fetch functions
    // function fetchResource(url){
    //     return fetch(url)
    //     .then(res => res.json())
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
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const img = document.createElement('img')
        const btn = document.createElement('button')

        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$${cardData.price}`
        btn.textContent = 'Delete'

        img.src = cardData.imageUrl
        li.className = 'list-li'

        //Event Listeners 
        btn.addEventListener('click',()=>li.remove())
    
        li.append(h3,pAuthor,pPrice,img,btn)
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