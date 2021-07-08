import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Album from "./features/Album";
import ToDo from "./features/ToDo";

function App() {
  return (
    <>
      <h2>Home Page</h2>
      <p>
        <NavLink to="/todos">To do List</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Album</NavLink>
      </p>

      <Switch>
        <Redirect from="/home" to="/todos" />
        <Redirect from="/bank/credit" to="/bank" exact />

        <Route path="/todos" component={ToDo} />
        <Route path="/albums" component={Album} />

      </Switch>
    </>
  );
}

export default App;
