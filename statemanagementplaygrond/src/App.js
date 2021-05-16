import logo from './logo.svg';
import {useState} from "react";
import data from "./data";

import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const [dataLocal, setDataLocal] = useState(data);
  return (
    <div className="App">
      <Form></Form>
    </div>
  );
}

export default App;
