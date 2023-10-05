---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "P2L4 - React Forms slides"
width: 1400
height: 1000
---


## React Forms 📝 

---

## ✅ Objectives 

- Explain the difference between a controlled and uncontrolled input
- Explain why controlled inputs are preferred by the React community
- Review how to use callback functions with events in React
- Review how to change parent state from a child component

---

#### What is a controlled input 

<small>In React, rather than looking into the DOM to get the form's input field values when the form is submitted, we use state to monitor the user's input as they type, so that our component state is always in sync with the DOM.</small>

<center><img src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1646072384/controlled-forms_j69gpu.svg" alt="controlled input diagram" style="height: 45vh" width="1000"></center>

---

### Making an input controlled 

<small>

To keep track of each input's value, you need:

1. State for the input that will manage the input's value

2. A `value` attribute on the input that corresponds to that piece of state

3. An `onChange` listener attached to the input to monitor users behavior and update state as the user interacts with the field

</small>

<div style="font-size: 0.8em">

Form components also need an `onSubmit` listener on the form element to handle the submitted form data.

</div>

---

### Examples

- <a href="https://codesandbox.io/s/controlled-form-with-individual-pieces-of-state-pbjpe4?from-embed" target="_blank" rel="noreferrer">A Form with individual pieces of state per input</a>
- <a href="https://codesandbox.io/s/controlled-form-with-individual-pieces-of-state-for-refactor-p3nee5" target="_blank" rel="noreferrer">Refactor to formState as an object</a>

---

### 🤗 Reconciliation 🤗

<div style="font-size: 0.8em">

- When setState is called, React will re-render that component and all of its children
- This is an expensive operation, so React optimizes by running a diffing algorithm to decide which components actually need to trigger committed changes to the DOM.
- This diffing process is called <a href="https://reactwithhooks.netlify.app/docs/reconciliation.html" target="_blank" rel="noreferrer">reconciliation</a>
- During reconciliation, React compares its own picture of the current state of the DOM tree with what it should look like after the change. Using this diff, the minimal DOM manipulation necessary is committed to reconcile the current DOM tree with what it should be after the change to state.

</div>

---

#### Why we don't mutate state directly

<div style="font-size: 0.75em">

- One of the choices made in the reconciliation process is to only commit to updating a component in the DOM if one of its nodes or property values has changed. 
- If all nodes (types of React elements) and their props and values are the same, React will leave that component unchanged from the previous render. {.fragment}
- If an object or array is mutated directly and then set as the new value for state **React sees the same object in state as the previous render and leaves the DOM untouched** {.fragment}

</div>

<pre class="code-wrapper fragment">
<code class="language-js hljs javascript">// so don't do this because it won't update the DOM
state.prop = "New Value"
setState(state);

// do this instead because it will update the DOM
// because React will see the state is set to a new object
setState({...state, prop: "New Value"})
</code>
</pre>

---

### 🛠️ ProjectForm setup 

<div style="display: flex">
<div style="width: 70%">
<small>1. For each input element in the form, we can create a new state variable:</small>

```js
const [name, setName] = useState("");
const [about, setAbout] = useState("");
const [phase, setPhase] = useState("");
const [link, setLink] = useState("");
const [image, setImage] = useState("");
```

<small>But a more elegant approach, in this case, is to create a state object with key/value pairs associated with each form field:</small>

```js
const [formData, setFormData] = useState({
  name: "",
  about: "",
  phase: "",
  link: "",
  image: "",
});
```

</div>

<div style="width: 30%">

<small>**Note:** This approach works well for a form that has multiple string, number, textarea, & select inputs but gets a bit clunkier when the form includes inputs like checkboxes or files. [React docs](https://reactwithhooks.netlify.app/docs/forms.html) recommend an external library like [Formik](https://formik.org/) as a complete solution for forms.</small>

<small>[React Hook Form](https://react-hook-form.com/) is another approach to handling forms in React that has become popular as well.</small>

</div>
</div>




---

<small>2. Connect the `value` attribute of each input field to the corresponding state variable:</small>

Example:

```js
<input
  type="text"
  id="name"
  value={formData.name}
/>
```

<small>❗**Note:** The reason `formData.name` is being used is because the state variable is an object named `formData`. To access the value of a key within the object, dot notation is used.</small>

---

<small>3. Add an onChange listener for each input field using a helper function:</small>

Example:

```js
<input 
  type="text" 
  id="name" 
  value={formData.name} 
  onChange={handleOnChange} 
/>
```

<small>🤯 If using individual pieces of state for form fields, a separate helper function will be created for each corresponding field.</small>

Example:

```js
<input type="text" id="about" onChange={handleAboutChange} />
```

```js
<input type="text" id="phase" onChange={handlePhaseChange} />
```

---

<small>4. Adding a `name` attribute to the input fields:</small>


```js
<input
  type="text"
  id="link"
  onChange={handleOnChange}
  value={formData.link}
  name="link"
/>
```

<small>❗ **IMPORTANT:** The `name` attribute needs to match with the key created in the state object in order to update the value. If the key in the state object is 'link' then the `name` attribute for the corresponding input field should be `link` as well</small>

---

<small>5. Updating the state when the onChange occurs (aka when the user begins typing or changing parts of the form):</small>

```js
const handleOnChange = (e) => {
  // e.target will return an object, the element that triggered the event with properties
  // including name and value. Object destructuring is used to extract that values from e.target

  const { name, value } = e.target;

  // This is the same as doing:
  // const name = e.target.name
  // const value = e.target.value

  // The setter function is then invoked and a new object will  be created with the 
  // contents of the previous formData spread and the new key/value added to avoid overwriting the 
  // previous form field values

  setFormData((formData) => ({ ...formData, [name]: value }));
};
```

---

<small>6. On the `<form>` element, add an `onSubmit` listener with a `handleSubmit` helper function that will run when the form is submitted:</small>


```js
<form className="form" autoComplete="off" onSubmit={handleSubmit}>
</form>
```

```js
const handleSubmit = (e) => {
  e.preventDefault();
};
```

---

### 🔑 After the form has been submitted 

<div style="font-size: 0.8em">

The state of `projects` is defined inside of the parent component `ProjectsContainer` and the behavior occurs in the child component `ProjectForm`. When the new project is submitted, `projects` will need to be updated to include it.

💡 What do we need to do?
</div>

---

<iframe src="https://codesandbox.io/embed/inverse-data-flow-diagram-mtvrs6?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style="width:100%; height:895px; border:0; border-radius: 4px; overflow:hidden;"
  title="inverse-data-flow-diagram"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


---


![Inverse Data Flow for adding projects](./react-inverse-data-flow-add-product.drawio.svg)


---


<div style="font-size: 0.95em">
Here is where the process of inverse data flow will need to occur:

1. Create a helper function in `ProjectsContainer` component called `onAddProject` that will update the `projects` state:

</div>

```js
const onAddProject = (newProject) => {
  setProjects(projects => [...projects, newProject]);
};
```
<div style="font-size: 0.95em">
And in the JSX:
</div>

```jsx
<ProjectForm onAddProject={onAddProject} />
```

---

<div style="font-size: 0.8em">

2. Inside the `ProjectForm` component, destructure `onAddProject` from the props and invoke it from within the `handleSubmit` function, passing it the formData object:
</div>

```js
const handleSubmit = (e) => {
  e.preventDefault();
  onAddProject(formData);

  // after we have delivered the formData to the App component 
  // and updated state, clear the form by setting the values
  // back to empty strings:
  setFormData({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: "",
  });
};
```

---

### 💡 Conclusion

<div style="font-size: 0.95em">

- State is a very integral part of the way that React applications render and manipulate the DOM. 
- React prefers using state to update forms and keep track of form fields values, making them controlled inputs, rather than letting form inputs manage their own internal state (through their value). {.fragment}
- What our user sees in the input fields reflects the value of the state associated with that field. {.fragment}
- This allows us to easily add rich interactive features to our form controls like: {.fragment}
  - changing the options of one of our `select` inputs based on the changed value of another `input` {.fragment}
  - hiding or displaying inputs based on the value of other inputs. {.fragment}
  - validating inputs based on a combination of their value and other input values. {.fragment}

</div>