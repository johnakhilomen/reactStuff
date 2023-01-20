import logo from "./logo.svg";
import "./App.css";
import { useCallback, useMemo, useState } from "react";

function App() {
  /* 
Virtual dom : plain JavaScript Object that represents the tag to be rendered onto the screen.
*/
  console.log(<div />);
  console.log(<div p={{ name: "prop" }} />);
  // or
  // console.log(React.createElement('div', null))

  /* 
  This technique HOC (Higher Order Component) is used to pass elements as props children
  */

  /* 
The ref provides access to the DOM Element represented by a React Element.
  */

  /*
using React.PropTypes, react can restrict props to certain types 
*/

  /*
Pure components are components with no state, or lifecycle methods.
*/

  /* Prop drilling is the coupling of nested components in a messy manner which 
allows the exposure of data to other components which is disadvantagous 
when we don't want certain components to have access to the data
*/

  return <div className="App"></div>;
}

export default App;
