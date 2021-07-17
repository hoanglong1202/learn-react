import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

ProductsSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductsSkeletonList.defaultProps = {
  length: 12,
};

function ProductsSkeletonList({ length }) {
  const skeletonArray = Array.from(new Array(length));
  return (
    <Box>
      <Grid container>
        {skeletonArray.map((x, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Box p={1}>
              <Skeleton variant="rect" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsSkeletonList;
