import {useEffect, useState} from "react";

import './App.css';
import ProfileEdit from "./ProfileEdit";

function App() {
  //Load via useEffect only once
  const [user, setUser] = useState({})
  const [time, setTime] = useState("")
  
  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    }
    loadUsers();
  }, []); // Passing [] so that it only runs the effect once


  useEffect(() => {
    setTime(`The time is now ${Date.now()}`);
  });


  if (user.id) {
    // `user.id` is truthy after the API call returns
    return (
      <div>
        <form name="profileEdit">
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            id="username"
            name="username"
            type="text"
            defaultValue={user.username}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" defaultValue={user.email} />
        </div>
      </form>
      <br></br>
      <p>edit profile...</p>
      <ProfileEdit></ProfileEdit>
      </div>
    );
  }
  return "Loading...";
}

export default App;
