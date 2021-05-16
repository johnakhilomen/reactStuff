import {useState} from "react";
import data from "./data";

import './App.css';
import List from "./List";

function Form() {
  const [formData, setFormData] = useState({title: '', body: ''});
  const [dataLocal, setDataLocal] = useState(data);
  const handleChange = ({target}) => {
    const {name, value} = target;
    setFormData({
        ...formData,
        [name] : value
    })
  }

  const add = (evt) =>
  {
    evt.preventDefault();
    formData['id'] = dataLocal.length + 1
    setDataLocal([
        ...dataLocal, 
        formData
    ])
  }
  // console.log(formData)
  const {title, body} = formData;
  return (
    <div className="App">
      <form onSubmit={(evt) => add(evt)}>
          title : <input name="title" type="text" value={title} onChange={(evt)=>handleChange(evt)}></input>
          <br></br>
          body : <input name="body" type="text" value={body} onChange={(evt)=>handleChange(evt)}></input>
          <br></br>
          <button>Add</button>
      </form>
    <br></br>
    <List dataLocal={dataLocal}></List>
    </div>
  );
}

export default Form;
