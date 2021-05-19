## useEffect

You can use the useEffect() hook to perform side effects after the state is updated and the component has rendered. You can also specify when it is necessary to rerun the effect.

The useEffect() hook accepts two arguments:

A function to run the effect
An optional array of dependencies for the effect function. These values determine when to rerun the effect.

## Run the effect after every render
By default, useEffect() runs after the first render and after every change to props or state.

The following effect sets the document title after every render.

`useEffect(() => {
  document.title = `The time is now ${Date.now()}`;
});`

## Run the effect once

This effect will run exactly once. Passing an empty array as the second parameter, tells React that the effect doesn't use any value that participates in the React data flow. This way, React knows that it's safe to run only once.

useEffect(() => {
  document.title = `Welcome to Thinkful!`;
}, []); // Pass [] to only apply the effect once
