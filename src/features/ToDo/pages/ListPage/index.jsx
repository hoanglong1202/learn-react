import React, { useState } from "react";
import ToDoList from "../../components/ToDoList";

const initToDoList = [
  {
    id: 1,
    title: "sleep",
    status: "new",
  },
  {
    id: 2,
    title: "eat",
    status: "completed",
  },
  {
    id: 3,
    title: "work",
    status: "new",
  },
];

function ListPage(props) {
  const [toDoList, setToDoList] = useState(initToDoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleToDoClick = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index] = {
      ...newToDoList[index],
      status: newToDoList[index].status === "new" ? "completed" : "new",
    };

    setToDoList(newToDoList);
  };

  const handleFilteredAll = () => {
    setFilteredStatus("all");
  };

  const handleFilteredCompleted = () => {
    setFilteredStatus("completed");
  };

  const handleFilteredNew = () => {
    setFilteredStatus("new");
  };

  const filteredToDoList =
    filteredStatus === "all"
      ? toDoList
      : toDoList.filter((toDo) => toDo.status === filteredStatus);

  return (
    <div>
      <ToDoList toDoList={filteredToDoList} onToDoClick={handleToDoClick} />
      <button onClick={handleFilteredAll}>All</button>
      <button onClick={handleFilteredCompleted}>Completed</button>
      <button onClick={handleFilteredNew}>New</button>
    </div>
  );
}

export default ListPage;
