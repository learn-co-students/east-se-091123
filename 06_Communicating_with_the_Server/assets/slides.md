---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "P1L4 - Communicating with the Server slides"
height: 900
width: 1400
---


<style>
input {
  font-size: 2rem;
  padding: 1rem;
}
</style>

# Communicating with the Server

---

## Lecture Goals

- Explore the request-response cycle
- Review the differences between Server and Client
- List the different HTTP Verbs + corresponding actions
- Observe how to send GET requests using `.fetch()`
- Explain what Asynchronous means in JavaScript
- Explain why Promises are important in JavaScript
- Observe: 
  - Handling promises and errors using `.then()` and `.catch()`
  - Using json-server to create a local API
  - Rendering data to the browser window after a fetch request

---

<img 
  src="https://res.cloudinary.com/dlzuobe8h/image/upload/v1665765657/0fcu_rfxhIc1xpVWSdmHJ7rAK7c1QwpvQ-qdsELtbKMxQn4wcPUImXCYwfVm7DvNE_EZqKjf2eV6l66afriZaXFrIAXXujac0D7WYepFKbj3f824O7Z7eMZhWG_nkvOjrbeSXDZe9DzqLuPqfLXhNCAMZqmlZxnEv-oWUvbwH1Upr3szQnlG1R2unNyT_nw_zfgztd.png" 
  alt="Client and Server communication" 
  style="width: 100%;"
/>

<aside class="notes">

Client
- User interface
- Responsible for styling, layout, and event functionality
- Lightweight and loads fast
- Acts as a “template” for dynamic data 
- Makes requests to the server

Server
- Responsible for data storage and management
- Changes in data may be triggered by the client, but the actual change is handled by the server-side
- Sends a response back to the server

</aside>

---

### HTTP Protocol

<img 
  src="https://res.cloudinary.com/dlzuobe8h/image/upload/v1665768471/F6Syv8aUhBiQUoOvmg8QwNRZdxaTyBVwNFsUMpPlYyGm5kXZ1gjown9J43fHTs-oA96bnSpWpI4gX195G3RsyL_DhgliM_jBNXX-4RMjEPowwWjUW7DVjsGawwJIsRlB3BT1Z78uu3pOJZvPTeufjQE1v2lR6FFpWrqdHV6Dt2T4-uIwTZCOeHF2COK8_nw_qrzyp6.png" 
  alt="HTTP protocol for HTTP requests" 
  style="width: 80%;"
/>

<small>Image from [MDN's HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)</small>

<aside class="notes">

HTTP is:
- Language protocol used to communicate between the server and client 
- Used for fetching resources
- Data exchange 
- Readable 
- Stateless 
- Has sessions

Open devtools in Chrome for the slideshow and demo the network tab.

</aside>


---

### HTTP Verbs & CRUD


Method | CRUD Action | Description
---------|----------|---------
 GET | READ | Retrieves resources
 POST | CREATE | Creates resources
 PUT/PATCH | UPDATE | Updates resources
 DELETE | DESTROY | Deletes resources


---

<iframe 
  src="https://http.cat/"
  style="width: 1500px; max-width: 100%; height: 900px; max-height: 60%"
></iframe>


---

### Synchronous vs Asynchronous Code examples

<div style="display: flex; flex-direction: row">
  <div style="width: 50%">
    
  #### Sync callbacks
  - `forEach`
  - `map`
  - `filter`
  - `find`
    
  </div>
  <div style="width: 50%">

  #### Async callbacks
  - `addEventListener`
  - `setTimeout`
  - `Promise.then`

  </div>
</div>

---

### Synchronous vs Asynchronous code explained

<img src="https://cdn-images-1.medium.com/max/749/0*arL3BF9VGPooOPIT" alt="Synchronous vs Asynchronous code diagram" />

<small>Image source: <a href="https://laptrinhx.com/javascript-promises-a-zendesk-introduction-173205527/" rel="noopener noreferrer" target="_blank">Laptrinx.com</a></small>

<aside class="notes">

- When we order food at a restaurant, the chefs don't wait till one dish is completely ready before starting on the next one. 
- They take in the orders from the wait staff and complete them with priorities in mind. 
- They'll finish appetizers first and they may also be dealing with meals ordered by other customers at the same time
- The restaurant could not function properly if dishes could only be processed one at a time and it would be very awkward for our guests if dishes were delivered one at a time in the same order that they were placed!
- Whoever ordered first would end up with cold food! :( 
- Instead, orders are handled asynchronously, this means that appetizers can be delivered when they're ready, potentially a couple at a time

</aside>

---

### Delivering a better experience

<img src="https://cdn.buttercms.com/hmirWTF7TBCsX6mncY0P" alt="Synchronous vs Asynchronous delivery in terms of time" />

<small>Image source: <a href="https://scoutapm.com/blog/async-javascript" rel="noopener noreferrer" target="_blank">Scout APM</a></small>

---

### A Demo of Sync & Async code in practice

<iframe src="https://codesandbox.io/embed/charming-sea-gzsr7e?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="sync-vs-async demo"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

---

### Promises

<img src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png" alt="Promise Diagram" width="90%" />

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" rel="noopener noreferrer" target="_blank">MDN - Promise</a> * <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" rel="noopener noreferrer" target="_blank">MDN - Using Fetch</a>

---

### JSON (JavaScript Object Notation)

<img 
  src="https://res.cloudinary.com/dlzuobe8h/image/upload/v1665769374/l7GjO7D3eyP2fDOG1wv6bsiTPWAzeYTlYJk8mCWlCXFpyXbDGVtvezulzA7fQ1---9Vs5GKpPnfAoVjX-QeezNH87M6HHcbVb9NViYGEkMWakQDJBi0k69c5fKeBiBQck5PQup45-dlVsjlc4q8uFeG5tJACZ60nwJ7ywjRjyLg6Zcj7775mBYqAr6BE_nw_m4zhfz.png" 
  alt="JSON example" 
  style="width: 80%;"
/>

<aside class="notes">

JSON is:
- a lightweight data storage for data exchange 
- it works with any language 
- and it's easy to read

</aside>

---

## Mocking the server with 
## json-server

<img src="https://media.giphy.com/media/3oKHW5ygEPHUNrb1SM/giphy.gif" alt="Spongebob delivering a Krabby Patty" />

---

### Purpose

Get a full fake REST API with zero coding in less than 30 seconds (seriously)

Created with <i class="fa-solid fa-heart"></i> for front-end developers who need a quick back-end for prototyping and mocking.

<a href="https://github.com/typicode/json-server" target="_blank"><i class="fa-brands fa-github"></i> View Docs</a>

Data in a JSON file <i class="fa-sharp fa-solid fa-arrow-right"></i> API endpoints to CRUD that data

---

### Installation

```
npm install -g json-server
```

---

### Usage in a project

- create a file at project root called db.json {.fragment}
- add an object to the db.json file {.fragment}
- each key in the object will be one of the resources you can request from the json-server {.fragment}
- run the server from your terminal: `json-server --watch db.json` {.fragment}

---

<div style="width: 90%; margin: 0 auto;">
<div style="display: flex; flex-direction: row">
  <div style="width: 50%">
    
  ### Setup
    
  </div>
  <div style="width: 50%">

  ### Demo

  </div>
</div>

<div style="display: flex; flex-direction: row;">
  <div style="width: 50%; display: flex; flex-direction: column; justify-content: center">

```bash
cd 04_Communicating_with_the_Server/assets
touch db.json
```
<small>copy and paste the below into the assets/db.json file:</small>

```json
{
  "posts": [
    { title: "JSON-server is really cool" },
    { title: "JSON-server allows you to mock an API server by creating a single file!"}
  ]
}
```

```bash
json-server --watch db.json
```

<img
  src="https://res.cloudinary.com/dlzuobe8h/image/upload/v1665769655/Screen_Shot_2022-10-14_at_10.22.25_AM_eqxe9c.png"
  alt="JSON server running in terminal"
/>
    
  </div>
  <div style="width: 50%; display: flex; flex-direction: column; justify-content: center">

  Visit <a href="http://localhost:3000/posts" target="_blank">http://localhost:3000/posts</a>

  <img
    src="https://res.cloudinary.com/dlzuobe8h/image/upload/v1665767313/Screen_Shot_2022-10-14_at_10.06.57_AM_rk6pgk.png"
    alt="json-server in action"
    style="width: 100%"
  />

  </div>
</div>

</div>

---

#### Make sure to start json-server from the right place!

<img src="https://media.giphy.com/media/BZhvKu7MT0n2voRhtf/giphy.gif" alt="Woman in plug running and jumping into an outlet" />

- If you run `json-server --watch db.json`, then your terminal will need to be in the same working directory as the db.json file. 

---

### Killing a zombie server

#### Diagnosis

```
Some error occurred Error: listen EADDRINUSE: address already in use 127.0.0.1:3000
```

#### Cure

```
kill $(lsof -t -i:3000)
```

#### Regimen 

```
alias k3000="kill $(lsof -t -i:3000)"
```

I've created an alias for this fix, `k3000`, so I can just type `k3000` in my terminal to run this command. To add your own alias, you'll want to put this code in your terminal profile: `~/.zshrc`, `~/.bash_profile`, or `~/.profile`