---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "P2L1 - React Components & Props"
width: 1200
---

<!-- slide -->

<h2> 🚗 React Roadmap

The goals for Phase 2: </h2>

- Create a static frontend site with components and props (DOM Manipulation)

- Use state and events to make your site dynamic (Event Handling)

- Add side effects and data fetching to communicate with a server (Network Communication)

---

## Components and Props 

---

<h2 style="text-align: center;"> ✅ Objectives </h2>

- Discuss the benefits of React over Vanilla JS
- Explain the importance of Components
- Practice writing components
- Define props and how to create them
- Recognize destructured props and how to work with them
- Render multiple components from a list

---

<h2> 💡 React Philosophy </h2>

- Use declarative syntax (JSX)
- Make it easier to work with the DOM
- Make a clearer connection between the code we write and what is displayed in the browser
- Use components to break down complex UI into smaller pieces which creates a better separation of concerns
- Make our code easier to maintain

---

<h2> React > Vanilla JS </h2>

<div style="display: flex; gap: 2rem;">
<div>
Instead of describing how to do something:

```js
const h1 = document.createElement("h1");
h1.id = "main";
h1.className = "blue";
h1.textContent = "Hello!";
```

We can just describe what we want:

```js
const h1 = (
  <h1 id="main" className="blue">
    Hello from JSX!
  </h1>
);
```

</div>
<div style="display: flex; flex-direction: column; justify-content: center;">
  In both cases, we'll get something like this:

  ```html
  <h1 id="main" class="blue">
    Hello!
  </h1>
  ```

</div>
</div>

---

#### What's a component?

- A function that takes a props object as an argument and returns some JSX {.fragment}

<pre class="fragment"><code language="javascript">function Greeting({text: 'Hello, world!'}) {
  return <h1>{text}</h1>  
}
export default Greeting;</code></pre>
- We can render components within other components by using their name in a tag returned in their JSX {.fragment}
<div class="fragment">

```
import Greeting from './Greeting';
function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Greeting />
      <Greeting text="Hi there!">
    </div>
  )
}
```

</div>

---

<iframe src="https://codesandbox.io/embed/components-and-props-demo-2mo4om?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;"
  title="components-and-props-demo"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

---

<h2> Wireframes </h2>

<div style="display: flex;">
  <div style="width: 40%">
    <img src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1643721399/wireframe_bfc35e.png">
  </div>

  <div style="font-size: 1.95rem; margin-top: 0.85rem; width: 60%">
    What components could we use to build this app?

  <textarea style="font-size: 2rem; border: 2px solid black; padding: 1rem; width: 90%; background: #333; color: #eee" rows="10" cols="35"></textarea>    
  </div>
</div>


---


## Let's Dive into the code!

- package.json
- node_modules
- public
- src/index.js
- src/App.js

---

### Sneak Peak at where we're going

Feel free to check out the application we'll be building together over the next couple of weeks

<a href="https://phase-2-react-project-showcase.netlify.app/" target="_blank">Project Showcase App</a>