# Asynchronous JavaScript & Fetch
## SWBAT
- [ ] Describe the request-response cycle
- [ ] Explain the differences between a server and a client
- [ ] Name the different HTTP Verbs and describe their actions
- [ ] Observe how to send a GET request using .fetch()
- [ ] Explain what asynchronous means in JavaScript
- [ ] Explain why promises are important in JavaScript
- [ ]Observe how to handle promises and errors using .then() and .catch()
- [ ] Observe how json-server is used to create a local API
- [ ] Observe how to render data to the browser window after a fetch request

## Deliverables 

$npm install -g json-server
$json-server --watch 04_Communicating_with_the_Server/src/db.json


- Demo JSON server
    - Explore JSON-server and fire up the server in the src directory with json-server –watch db.json
- Demo GET all
    - Make a fetch request to /books. 
    - Review the promises object
    - Use .then to handle a successful promise with a callback and .catch to handle a failed promise with a callback.
    - Use .json to convert our response body into a javascript object.
    - Create a second .then to handle the promise from .json. 
    - Render the data on the DOM 
- Demo GET one
    - Make a fetch request to /stores/1 
    - Use .then to handle a successful promise with a callback and .catch to handle a failed promise with a callback.
    - Use .json to convert our response body into a javascript object.
    - Create a second .then to handle the promise from .json. 
    - Render the data on the DOM 
- Refactor:
    - Create a function called fetchResource that takes a url or endpoint as a parameter.
    - Return a fetch call that’s passed the URL.
    - Handle the promise with a .then that takes a callback.
    - Use .json to convert our response body into a javascript object.
    - Call fetchResource and pass it the URL for ‘/books’
    - Chain a .then onto the fetch resource that takes a callback.
    - The callback should render the books on the DOM
    - Add a .catch to handle a failed promise 
    - Call fetchResource and pass it the URL for ‘/stores/1
    - Chain a .then onto the fetch resource that takes a callback.
    - The callback should render the store on the DOM
    - Add a .catch to handle a failed promise 
- Bonus
    - Create a fetch request that fetches all stores
    - Create a ul with a class name of store-menu.
    - Create a li for each store that's appended to the ul. The li's text content should be the store name, and it should have an id with the store's id.
    - Add an eventListener for click to each li.
    - The listener should change the header and footer to the information to match the store that was selected. You can do this without an additional fetch, but if you'd like to demo fetch again, make a fetch call for the specific store information. 


## The Web
![request_response](assets/request_response.png)

What happens when you type a URL into the browser? 
Your browser makes a request to a server, that server sends some response, and your browser parses and process that data.

Think about when you log into a website like Pinterest or Instagram. You are given an interface full of data curated and unique to you. Have you ever wondered why what when you log in is different from what your friends/family see when they log in? This is because clients can be treated like a template populated with data. 

When you log in, the client will return with the basic template of the web page and make requests for data specific to each user. 

In JavaScript, we can achieve this through HTTP requests.

## HTTP
"The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web and is used to load web pages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message."
[ Cloudflare, "What is HTTP?" 2022](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/)

In other words, HTTP is the language used by the client(browser). The server is used to communicate and exchange responses, including data.

### The Request 
A request has HTTP methods (also known as HTTP verbs)  defining the kind of request, the address of the request, and sometimes data or headers.

HTTP Methods

GET: requests resources and retrieves data (READ)

POST: sends data to the server (CREATE)

PATCH: Updates part of a resource (UPDATE)

PUT: Updates all of a resource (UPDATE)

DELETE: Deletes a resource (DELETE)

### Fetch & Promise
.fetch() is a method that allows us to create an HTTP request. To Read, CREATE, UPDATE or DELETE resources.
It returns a promise.

When an asynchronous operation happens, a Promise is an object that represents its completion or failure. 
It has 3 states, pending, fulfilled, and rejected. 

.then() is a method called on a promise and returns a promise.

```
// When given a URL fetch, create an HTTP GET request to the server the URL points to. It returns a promise.
//Once the promise has been fulfilled the response from the server is passed to the .then() 
fetch(url)
.then()

// The .then takes a callback
// Within that callback we can parse the response by calling .json() on it. 
// .json() also returns a promise so we can chain a .then onto our original .then that will process the data once the promise from the .json() is fulfilled. 

fetch(url)
.then(response => {
    //retrives the data from our response
    return response.json()
})
.then(data => console.log(data))

```