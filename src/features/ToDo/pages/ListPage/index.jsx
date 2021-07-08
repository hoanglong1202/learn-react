import React, { useState, useMemo, useEffect } from "react";
import ToDoList from "../../components/ToDoList";
import queryString from "query-string";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import productsApi from "../../../../api/productApi";
import ToDoForm from "../../components/ToDoForm";

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
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();

  const [toDoList, setToDoList] = useState(initToDoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "all");
  }, [location.search]);

  useEffect(() => {
    const getProducts = async () => {
      const params = {
        _limit: 10,
      };
      const result = await productsApi.getAll(params);
      console.log(result);
    };

    getProducts();
  }, []);

  const handleToDoClick = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index] = {
      ...newToDoList[index],
      status: newToDoList[index].status === "new" ? "completed" : "new",
    };

    setToDoList(newToDoList);
  };

  const handleFilteredAll = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: "all" }),
    });
  };

  const handleFilteredCompleted = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: "completed" }),
    });
  };

  const handleFilteredNew = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: "new" }),
    });
  };

  const filteredToDoList = useMemo(
    () =>
      filteredStatus === "all"
        ? toDoList
        : toDoList.filter((toDo) => toDo.status === filteredStatus),
    [toDoList, filteredStatus]
  );

  const handleToDoFormSubmit = (values) => {
    const newToDo = {
      id: toDoList.length + 1,
      title: values.title,
      status: "new",
    };
    const newToDoList = [...toDoList, newToDo]
    setToDoList(newToDoList);
  };

  return (
    <div>
      <ToDoForm onSubmit={handleToDoFormSubmit} />

      <ToDoList toDoList={filteredToDoList} onToDoClick={handleToDoClick} />
      <button onClick={handleFilteredAll}>All</button>
      <button onClick={handleFilteredCompleted}>Completed</button>
      <button onClick={handleFilteredNew}>New</button>
    </div>
  );
}

export default ListPage;
