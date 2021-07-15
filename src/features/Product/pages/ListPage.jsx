import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import productsApi from "api/productApi";
import React, { useEffect } from "react";
import { useState } from "react";
import ProductsSkeletonList from "../components/ProductsSkeletonList";

const useStyles = makeStyles((theme) => ({
  root: {},
  right: {
    flex: "1 1 auto",
  },
  left: {
    width: 250,
  },
}));

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      (async () => {
        const result = await productsApi.getAll({ _page: 1, _limit: 10 });
        console.log(result);
      })();
    } catch (error) {
      console.log("Some error occur: ", error);
    }

    // setLoading(false);
  }, []);
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Columm</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductsSkeletonList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
