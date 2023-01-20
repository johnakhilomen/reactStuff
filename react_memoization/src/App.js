import logo from "./logo.svg";
import "./App.css";
import ParentClassWithMemoization from "./ParentClassNoMemoization";

function App() {
  return (
    <div className="App">
      {/* <ParentClassNoMemoization /> */}
      <ParentClassWithMemoization />
    </div>
  );
}

export default App;
