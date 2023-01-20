import React, { Component } from "react";

class ChildClassWithMemoization extends Component {
  render() {
    console.log("Child render");
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default ChildClassWithMemoization;
