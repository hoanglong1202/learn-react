import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import productsApi from "api/productApi";
import React, { useEffect, useState } from "react";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductsSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";

const useStyles = makeStyles((theme) => ({
  root: {},
  right: {
    flex: "1 1 0",
  },
  left: {
    width: 250,
  },
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",

    marginTop: 20,
    paddingBottom: 10,
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 12,
    _sort: "salePrice:ASC",
  });
  const { total, limit } = pagination;

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productsApi.getAll(filter);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Some error occur: ", error);
      }

      setLoading(false);
    })();
  }, [filter]);

  const handlePageChange = (e, page) => {
    setFilter((preState) => ({ ...preState, _page: page }));
  };

  const handleSortChange = (newSortValue) => {
    setFilter((preState) => ({ ...preState, _sort: newSortValue }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilter((preState) => ({ ...preState, ...newFilters }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <Typography>Left Column</Typography>
              <ProductFilters filters={filter} onChange={handleFiltersChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currenSort={filter._sort}
                onChange={handleSortChange}
              />

              {loading ? (
                <ProductsSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}

              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(total / limit)}
                  color="primary"
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
