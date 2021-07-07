import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

ToDoList.propTypes = {
  toDoList: PropTypes.array,
  onToDoClick: PropTypes.func,
};

ToDoList.defaultProps = {
  toDoList: [],
  onToDoClick: null,
};

function ToDoList({ toDoList, onToDoClick }) {
  const handleToDoClick = (index) => {
    if (!onToDoClick) return;

    onToDoClick(index);
  };

  return (
    <ul className="toDoList">
      {toDoList.map((toDo, index) => (
        <li
          key={toDo.id}
          className={toDo.status === "completed" ? "completed" : undefined}
          onClick={() => handleToDoClick(index)}
        >
          {toDo.title}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
