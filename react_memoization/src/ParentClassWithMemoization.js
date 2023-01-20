import React, { Component } from "react";
import ChildClassWithMemoization from "./ChildClassNoMemoization";

class ParentClassWithMemoization extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    console.log("Parent render");
    return (
      <div className="App">
        <button onClick={this.handleClick}>Increment</button>
        <h2>{this.state.count}</h2>
        <ChildClassWithMemoization name={"joe"} />
      </div>
    );
  }
}

export default ParentClassWithMemoization;
