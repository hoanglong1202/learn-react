import Header from "components/Header";
import NotFound from "components/NotFound";
import Album from "features/Album";
import Counter from "features/Counter";
import ToDo from "features/ToDo";
import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <p>
        <NavLink to="/todos">To do List</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Album</NavLink>
      </p>

      <Switch>
        <Redirect from="/home" to="/todos" />
        <Redirect from="/bank/credit" to="/bank" exact />

        <Route path="/" component={Counter} exact />
        <Route path="/todos" component={ToDo} />
        <Route path="/albums" component={Album} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
