import {
  Box,
  Container,
  Grid,
  Paper,
  makeStyles,
  LinearProgress,
} from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddToCardForm from "../components/AddToCardForm";
import ProductAdditional from "../components/ProductAdditional";
import ProductDescription from "../components/ProductDescription";
import ProductInfor from "../components/ProductInfor";
import ProductMenu from "../components/ProductMenu";
import ProductReviews from "../components/ProductReviews";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
  },

  left: {
    width: 400,
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    flex: "1 1 0",
    padding: theme.spacing(1.5),
  },
  loading: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
}));

function DetailPage() {
  const classes = useStyles();
  const { url } = useRouteMatch();

  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  const handleAddToCardSubmit = (formValue) => {
    console.log("New form value: ", formValue);
  };

  return (
    <Box>
      <Container className={classes.root}>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfor product={product} />

              <AddToCardForm onSubmit={handleAddToCardSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />

        <Switch>
          <Route path={url} exact>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`}>
            <ProductAdditional />
          </Route>

          <Route path={`${url}/reviews`}>
            <ProductReviews />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
