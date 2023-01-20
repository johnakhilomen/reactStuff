import React, { PureComponent } from "react";

class ChildClassWithMemoization extends PureComponent {
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
