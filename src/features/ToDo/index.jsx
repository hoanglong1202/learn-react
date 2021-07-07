import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import NotFound from "../../components/NotFound";

function ToDo(props) {
  const match = useRouteMatch();
  return (
    <div>
      <h2>To Do List</h2>

      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoid`} component={DetailPage} exact />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default ToDo;
