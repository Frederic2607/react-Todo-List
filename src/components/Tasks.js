import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Tasks = (props) => {
  const { tasks } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ul className="task">
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBox}
            />
            <span className={isChecked ? "checked" : ""}>{task}</span>

            <FontAwesomeIcon icon="trash-alt" size="1x" />
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
