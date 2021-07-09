import React from "react";

const Tasks = (props) => {
  const { tasks } = props;

  return (
    <div>
      <ul>
        <li>{tasks}</li>
      </ul>
    </div>
  );
};

export default Tasks;
