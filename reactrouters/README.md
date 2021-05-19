# React Routers

The go() method allows navigation, forward or backward, multiple pages at a time. You can use positive numbers to go forward and negative numbers to go backward.
`
history.go(0); // Equivalent to refreshing the page
history.go(-1); // Equivalent to `history.goBack()`
history.go(-2); // Equivalent to calling `history.goBack()` twice
history.go(1); // Equivalent to `history.goForward()`
history.go(3); // Equivalent to calling `history.goForward()` three times
`
If you call go() with a number, and the history is not able to move that number of pages, nothing will happen. For example, if there is one previous page in the history and you call history.go(-2), nothing will happen.

The push() method pushes a new entry onto the history stack and changes the current URL to the value that you specify. Take a look:
`
history.push("/users"); // Navigate to /users
history.push("/home?q=query"); // Navigate to /home?q=query
`
When you use push(), you're always navigating forward from the current page.

```python
import React from "react";
import { useHistory } from "react-router-dom";

function GoHomeButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("/")}>
      Go Home
    </button>
  );
}
```