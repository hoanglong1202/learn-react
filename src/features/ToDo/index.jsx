import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

function ToDo(props) {
  const match = useRouteMatch();
  return (
    <div>
      <h2>To Do List</h2>

      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoid`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default ToDo;
