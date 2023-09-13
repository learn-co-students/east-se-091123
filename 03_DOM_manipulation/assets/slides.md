---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "P1L2 - DOM Manipulation slides"
height: 900
width: 1400
---

# DOM Manipulation

---

#### Learning Goals

- Understand what the DOM is and how to traverse it
- Select single DOM element with .querySelector() and .getElementById()
- Select multiple DOM elements with .querySelectorAll() and .getElementsByClassName()
- Add context with .textContent
- Create elements with .createElement
- Append elements to the DOM with .appendChild() and .append()

---

#### Single Page Applications

<div style="display: flex; flex-direction: row">
  <div style="width: 40%">
    
- JavaScript renders the content of the page dynamically
- Avoids page refreshes
- Page transitions are much faster

    
  </div>
  <div style="width: 60%">

<img src="https://res.cloudinary.com/dlzuobe8h/image/upload/v1665592555/uNQIVeUCgFrlo5i0bxmt398FK5c0MXq6FN8v-4TT6C-06WuV5_K3rNMdvkw8mxvDe5bC83bqQz8F0ljo9UzDyuuGFbl7ikDNtUIDNUTeuLBGzQjNizoypOGYy99DX86mhD2TJX7Kb06dLcA66xkqG0WkqOTIWVw37J9dke9zvGES2RNZFcP7zouru-k0_nw_m5insy.png" alt="Mapquest image" style="width: 100%" />

https://techcrunch.com/wp-content/uploads/2007/10/picture-242.png

  </div>
</div>


---

<p style="font-size: 5rem">
<b>D</b>ocument <br/>
<b>O</b>bject <br/>
<b>M</b>odel

</p>

---

<img src="./dom-is-a-tree.drawio.svg" alt="The DOM as a Tree" style="width: 80%" />

[MDN: Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) - [MDN: Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

---

#### Tasks

-  Select single DOM elements with:
    - `.querySelector()` and 
    - `.getElementById()`
-  Select multiple elements with:
    - `.querySelectorAll()` and 
    - `.getElementsByClassName()`
- Add content with `.textContent=`
- Create elements with `.createElement`
- Append elements to the DOM with `.appendChild` and `.append`
- Explain the dangers of `innerHTML=`
- Remove content with `.remove`
- Visit <a href="https://www.tvmaze.com/" rel="noopener noreferrer" target="_blank">TVMaze</a> to practice


---

#### Features

- `renderHeader()`: renders the header content via JS
- `renderFooter()`: renders the footer content via JS
- `renderBook()`: create a list item for a book and inserts it into the list
- `removeBook(index)`: removes a book li from the DOM by its index in the `ul`


---

#### The Dangers of innerHTML=

<iframe src="https://codesandbox.io/embed/dark-silence-5rbq0x?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;"
  title="dark-silence-5rbq0x"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

---

#### Bread and Butter tools
- Create
  - `document.createElement()`
- Read
  - `querySelector()` & `querySelectorAll()`
- Update 
  - `textContent =`
  - `append()`
  - `classList` for adding and removing classes from an element
  - dot notation for editing properties (eg. `img.src = imageUrl`, or `div.className = "card"`)
- Destroy 
  - `remove()`

---


#### Links!

- [DOM chapter in Eloquent JavaScript](https://eloquentjavascript.net/14_dom.html)
- [The Dangers of InnerHTML](https://betterprogramming.pub/dom-manipulation-the-dangers-of-innerhtml-602f4119d905)
- [MDN - NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN - HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [MDN - Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [MDN - Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN - Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)