# React Information Flow

## SWBATs:

- [ ] Define the term “lifting state”
- [ ] Recognize the pattern for changing state in a parent component from a child component
- [ ] Explain the role that callback functions play in changing parent state
- [ ] Observe how we can render reusable components that invokes different callback functions after an event

## Deliverables

#### 1. Add a button to our App that will use json-server to fetch projects and store them in state

- Add a button 'Load Projects' to the JSX of the `App` component

- Add a 'click' event to the button

- When the button is clicked, make a fetch request to "http://localhost:4000/projects" and set the `projects` state to the value returned by the response

#### 2. Use Inverse Data flow to implement Light-Dark mode

- Refactor isDarkMode state from the `Header` component to the `App` component.

- Create a callback function that updates `isDarkMode` and pass the callback function as a prop to the `Header` component

- Inside the `Header` component, invoke the callback function in place of updating the state

#### 3. Refactor the filter component out of `ProjectList` and implement inverse data flow

- Refactor the `searchQuery` state and the filter method inside of the `ProjectList` component to the `App` component

- Using inverse data flow, get the value of the input field UP to the App component

- Write a callback function inside the App component:

  - the function should take in a new search value and set state with that value

  - pass the callback function down as a prop to `ProjectList`

- Call the callback function from the onChange event listener

### Process: Building React Features With State

1. Decide: Do we need state for this feature? If so, where?
2. Set up the initial state. What's a good initial value? What will we see on the page first? How will it change?
3. Set up component to render something based on state. Do we need conditional rendering?
4. Find a way to update state dynamically (based on user interaction; fetching data; etc).

### Process: Using Inverse Data Flow

1. Define a event handler in the child component
2. Define a callback function in the parent component
3. Pass the callback function as a prop to the child
4. Call the callback in the event handler with whatever data we're sending up

### Inverse Data Flow

In React, we only have one way to share information between multiple components:
`props`. We've seen how to use props to send data from a parent component to a child component, like this:

```js
function Parent() {
  const [search, setSearch] = useState("");

  // passing search down as a prop
  return <Child search={search} />;
}

function Child({ search }) {
  return (
    <div>
      <p>You searched for: {search}</p>
    </div>
  );
}
```

It's also helpful to be able to pass data **up** from a child to a parent. In
React, the only way to achieve this is by sending a **callback function** down
from the parent to the child via `props`, and **call** that callback function in
the child to send up data that we need.

First, we need to define a callback function in the parent component:

```js
function Parent() {
  const [search, setSearch] = useState("");

  function handleSearchChange(newValue) {
    // do whatever we want with the data (usually setting state)
    setSearch(newValue);
  }

  return <Child search={search} />;
}
```

Then, we need to pass a **reference** to the function down as a **prop** to the
child component:

```js
function Parent() {
  const [search, setSearch] = useState("");

  function handleSearchChange(newValue) {
    setSearch(newValue);
  }

  // pass down a reference to the function as a prop
  return <Child search={search} onSearchChange={handleSearchChange} />;
}
```

In our child component, we'll be able to call the callback function with
whatever data we want to send up to the parent:

```js
function Child({ search, onSearchChange }) {
  return (
    <div>
      <p>You searched for: {search}</p>

      {/* call onSearchChange and pass up some data */}
      <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  );
}
```

### Lifting State

- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.
