import React from "react";
import PropTypes from "prop-types";
import { THUMBNAIL_PLACEHOLDER } from "constants/index";
import { STATIC_HOST } from "constants/common";
import { Box, makeStyles } from "@material-ui/core";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    width: "100%",
    objectFit: "cover",
  },
}));

function ProductThumbnail({ product }) {
  const classes = useStyles();

  const thumbnail = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box>
      <img className={classes.thumbnail} src={thumbnail} alt={product.name} />
    </Box>
  );
}

export default ProductThumbnail;
