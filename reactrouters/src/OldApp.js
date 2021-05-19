import React from "react";

// All components in one file for simplicity only

function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {
  return (
    <div className="App">
      {window.location.pathname === "/about" ? <About /> : <Home />}
    </div>
  );
}

export default App;