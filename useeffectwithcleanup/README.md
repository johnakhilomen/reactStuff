## Effect hook with cleanup
Imagine that you want to write a component that allows an admin user to update the user profile of any user on the system. To do so, you will need to pass the user's ID to the component, so that the component can do the following:

Make an API call to get that user's profile.
Allow the admin user to edit the profile.
Upon form submission, make another API call to save the updated profile.
However, take a look at the image below. Did you notice that the user ID in the parent component is not the same as the API user ID? In this checkpoint, you'll explore what makes this happen and how you can fix it.

![Enable throttling](/src/images/slow-api.png)

## Avoiding race conditions
The fetch() call is asynchronous, so anything can happen between when the API call starts and ends. This can introduce race conditions; for example, you could get new props. If the code in the effect is calling an API and depends on props, you have a race condition.


## Usage
To make the effect more noticeable, you can simulate a slower network connection in your browser. Chrome Developer Tools allows you to easily throttle your internet bandwidth. To do so, first open up DevTools, then navigate to the Network tab, and select the "Slow 3G" option from the menu, as follows:
![Enable throttling](/src/images/enable-throttling.png)
-   Click the "Start" button to load the property list.
