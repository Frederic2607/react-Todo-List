import React from "react";

const Form = (props) => {
  const { input, setInput, tasks, setTasks } = props;

  const handleTaskChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTask = [...tasks];
    newTask.push(input);
    setTasks(newTask);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Task"
          value={input}
          onChange={handleTaskChange}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default Form;
