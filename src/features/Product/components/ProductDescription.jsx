import React from "react";
import PropTypes from "prop-types";
import { Box, Paper } from "@material-ui/core";
import DOMPurify from "dompurify";

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  const clean = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0}>
      <Box p={2} dangerouslySetInnerHTML={{ __html: clean }} />
    </Paper>
  );
}

export default ProductDescription;
