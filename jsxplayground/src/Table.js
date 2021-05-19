import React from "react";

const todos = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

const rows = todos.map(({ completed, description }, index) => (
    <tr key={index}>
      <td>{description}</td>
      <td>{completed ? "Yes" : "No"}</td>
    </tr>
  ));

function Table() {
  return (
      <center>
        <table cellPadding="2" cellSpacing="2" border="1">
            <thead>
                <tr>
                <th>Description</th>
                <th>Completed?</th>
                </tr>
            </thead>
        <tbody>{rows}</tbody>
        </table>
      </center>
    
  );
}

export default Table;