import { Box, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Product from "./Product";

ProductsSkeletonList.propTypes = {
  data: PropTypes.array,
};

ProductsSkeletonList.defaultProps = {
  data: [],
};

function ProductsSkeletonList({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsSkeletonList;
