import { Box, makeStyles, Typography } from "@material-ui/core";
import { STATIC_HOST } from "constants/common";
import { THUMBNAIL_PLACEHOLDER } from "constants/index";
import PropTypes from "prop-types";
import React from "react";

ProductsSkeletonList.propTypes = {
  product: PropTypes.object,
};

ProductsSkeletonList.defaultProps = {
  product: {},
};

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
}));

function ProductsSkeletonList({ product }) {
  const classes = useStyles();
  const thumbnail = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
  return (
    <Box p={1}>
      <Box p={1}>
        <img className={classes.thumbnail} src={thumbnail} alt={product.name} />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
}

export default ProductsSkeletonList;
