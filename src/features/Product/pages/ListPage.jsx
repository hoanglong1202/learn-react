import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import productsApi from "api/productApi";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FilterViewer from "../components/Filters/FilterViewer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductsSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import queryString from "query-string";

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
  const history = useHistory();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [filter, setFilter] = useState(() => ({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 12,
    _sort: queryParams._sort || "salePrice:ASC",
  }));
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

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  }, [history, filter]);

  const handlePageChange = (e, page) => {
    setFilter((preState) => ({ ...preState, _page: page }));
  };

  const handleSortChange = (newSortValue) => {
    setFilter((preState) => ({ ...preState, _sort: newSortValue }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilter((preState) => ({ ...preState, ...newFilters }));
  };

  const handleFiltersViewChange = (newFilters) => {
    setFilter(newFilters);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={filter} onChange={handleFiltersChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currenSort={filter._sort}
                onChange={handleSortChange}
              />

              <FilterViewer
                filters={filter}
                onChange={handleFiltersViewChange}
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
