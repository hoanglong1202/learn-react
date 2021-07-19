import { Box } from "@material-ui/core";
import ListPage from "features/Product/pages/ListPage";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

function Product(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
}

export default Product;