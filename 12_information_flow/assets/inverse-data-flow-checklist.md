## Implementing Inverse Data Flow pattern

### Parent
- state
- callback that updates that state
- pass callback as a prop to child component where event triggering update will occur
- pass state as a prop to child component(s) that need it

### Child (with UI element triggering update)
- accept callback as prop
- attach event listener to appropriate UI element (button, form, etc.)
- within event handler function, invoke callback passed from parent

### Child (consuming state from parent)
- accept state from parent as a prop
- whenever parent re-renders this component will re-render with a (possibly) new prop value

> NOTE: The child consuming the parent state as a prop and the child receiving the callback to update that state can be the same component if the situation warrants it.