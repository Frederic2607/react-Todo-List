import React from "react";

const Tasks = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return <li index={index}>{task}</li>;
      })}
    </ul>
  );
};

export default Tasks;
