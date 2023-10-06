# Side Effects and Data Fetching

## SWBATs:

- [ ] Observe how to send a POST request via form
- [ ] Explain what a side effect is
- [ ] Observe how React manages side effects with the useEffect hook
- [ ] Observe how to use the useEffect hook to fetch data on page load
- [ ] Review changing parent state

## Deliverables

#### 1. Persist the new project upon the `ProjectForm` submission

- Send the new project data to the server using a `POST` fetch request

#### 2. Implement useEffect in App component to load projects

- Import the `useEffect` hook from the React library

- Invoke `useEffect` and make a `GET` request using the `fetch` method

- Update `projects` state to response from the server

#### 3. Demonstrate the order of operations between rendering a component and running the side effect

- Place a console.log() inside the `App` component as well as the `useEffect` method

- Open up the devtools to observe when each phase of the component will occur 

#### 4. Demonstrate the unmounting and cleanup phase of a component through `useEffect`

- Return a cleanup function inside the `useEffect` with a console.log()

- Open up the devtools to observe when the cleanup will occur in the stages of a components lifecycles

### Fetching Data with useEffect

In terms of a React component, the main effect of the component is to return some JSX. One of the first rules we learned about function components is that they take in props, and return JSX. However, it's often necessary for a component to perform some side effects in addition to its main job of returning JSX. For example, we might want to:

- Fetch some data from an API when a component loads
- Start or stop a timer
- Manually change the DOM
- Get the user's location

In order to handle these kinds of side effects within our components, we'll need to use another special hook from React: `useEffect`.

It looks like this:

```js
import { useEffect } from "react";

function App() {
  useEffect(
    // side effect function
    () => {
      console.log("Running side effect");
    },
    // dependencies array
    []
  );

  console.log("Rendering component");

  return <h1>App</h1>;
}
```

If you run the example code now, you'll see the console messages appear in this order:

- Component rendering
- useEffect called

So we are now able to run some extra code as a side effect after our component is rendered!

### useEffect Dependencies

```js
useEffect(
  // side effect function
  () => {
    console.log("Running side effect");
  },
  // dependencies array
  []
);
```

The dependencies array lets us control what state the side effect code depends on. You can think of it as a way to synchronize our effects with
state.

- When we don't include a dependencies array, our side effect will run every time the component renders
- When the dependencies array is empty, the side effect will only run once
- When we put variables into the dependencies array, the side effect will run any time those variables change between renders

For example, if we change our component like so:

```js
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Running side effect");
    console.log("Count is:", count);
  }, [count]);

  console.log("Rendering component");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}
```

The side effect code will only run when the `count` state changes; but it won't run when the `text` state changes.

### Cleaning Up

One part of our component's journey "what happens to our component when we no longer are displaying it"?

When React first runs our app's code, our components are born onto the page: React calls our component functions; figures out what JSX they return; and turns that JSX into some DOM elements that are then rendered in the browser.

After they are rendered, React calls any side effects that we set up in our components using the `useEffect` hook.

While our components are living on the page, we can update their data by
setting state. Whenever we set state in a component, that cause our component (and all of its children) to re-render. After the components have re-rendered, React will call our side effects again. (It will also run the side effects cleanup function!)

When using the `useEffect` hook for long-running actions, like an event listener on the window, or subscription to a Websocket, or a timer running in the background, it's useful to be able to clean up the code when we are no longer using it.

In React, we can perform this clean up by _returning a function_ from the
`useEffect` callback:

```js
useEffect(() => {
  console.log("Side effect function");

  return () => {
    console.log("Cleanup function");
  };
});
```

As you can see from the diagram above, the function to "Cleanup Old Side
Effects" will run on a couple of occasions:

- Before running the side effect function (if we update state, the cleanup function will run before the side effect)
- When our component unmounts (when it is no longer being returned by a parent component)

Here's an example of using the cleanup function to remove an event listener:

```js
useEffect(() => {
  function handleEvent(event) {
    setMouseX(event.target.clientX);
  }

  window.addEventListener("mousemove", handleEvent);

  return function cleanup() {
    window.removeEventListener("mousemove", handleEvent);
  };
});
```

One important reason to clean up after our effects is so that our code isn't running in the background and using up resources unnecessarily!

### Resources

Learning `useEffect` is challenging, but in the long run it will be one of the
most important tools in your React toolkit. Here are some deeper dives into
working with `useEffect` to refer to when you're ready:

- The [useEffect docs](https://reactjs.org/docs/hooks-effect.html) and
  [useEffect reference](https://reactjs.org/docs/hooks-reference.html#useeffect)
  on the React docs are a great place to start!
- [The last guide to the useEffect Hook you’ll ever need](https://blog.logrocket.com/guide-to-react-useeffect-hook/): A great post from the logrocket blog with examples of different use cases.
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/):
  very in-depth blog by Dan Abramov, really great at building a good mental
  model of how `useEffect` works
- [Myths About useEffect](https://epicreact.dev/myths-about-useeffect/): Blog by
  Kent C Dodds about the right and wrong way to think about the `useEffect` hook
- [How to Fetch Data with useEffect](https://www.robinwieruch.de/react-hooks-fetch-data):
  In depth article about making fetch requests in React
- [Using D3.js with React.js](https://blog.griddynamics.com/using-d3-js-with-react-js-an-8-step-comprehensive-manual/): An example of how to integrate a 3rd party library for data visualization (D3.js) utilizing the useEffect hook.

