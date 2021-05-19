import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/about">
            <About></About>
        </Route>
        <Route path="/userprofile/:id">
          <UserProfile></UserProfile>
        </Route>
      </div>
    </Router>
  );
}

export default App;