## Avoiding race conditions
The fetch() call is asynchronous, so anything can happen between when the API call starts and ends. This can introduce race conditions; for example, you could get new props. If the code in the effect is calling an API and depends on props, you have a race condition.


## Usage
To make the effect more noticeable, you can simulate a slower network connection in your browser. Chrome Developer Tools allows you to easily throttle your internet bandwidth. To do so, first open up DevTools, then navigate to the Network tab, and select the "Slow 3G" option from the menu, as follows:
![Enable throttling](/src/images/enable-throttling.png)
-   Click the "Start" button to load the property list.
