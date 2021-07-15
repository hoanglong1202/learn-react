import Header from "components/Header";
import NotFound from "components/NotFound";
import Album from "features/Album";
import Counter from "features/Counter";
import Product from "features/Product";
import ToDo from "features/ToDo";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Redirect from="/home" to="/todos" />
        <Redirect from="/bank/credit" to="/bank" exact />

        <Route path="/" component={Counter} exact />
        <Route path="/todos" component={ToDo} />
        <Route path="/albums" component={Album} />
        <Route path="/products" component={Product} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
