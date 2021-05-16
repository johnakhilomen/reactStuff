import {useState} from "react";
import data from "./data";

function List({dataLocal}) {
  return (
    <div className="App">
      <ul style={{listStyle: "none"}}>
      {
      dataLocal.map(({id, userId, title, body})=>{
        return (<li key={id}>
                <p>{id}<br></br>
                <b>Title: </b>{title}<br></br>
                <b>Body: </b>{body}
                </p>
                </li>)
      })
    }  
      </ul>
    
    </div>
  );
}

export default List;
