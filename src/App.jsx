
import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "components/NotFound";
import Album from "features/Album";
import Counter from "features/Counter";
import ToDo from "features/ToDo";

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

        <Route path="/" component={Counter} exact/>
        <Route path="/todos" component={ToDo} exact/>
        <Route path="/albums" component={Album} exact/>

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
