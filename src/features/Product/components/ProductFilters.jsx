import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import { Box } from "@material-ui/core";

ProductFilters.propTypes = {
  onChange: PropTypes.func,
};

function ProductFilters({ onChange }) {
  const handleCategoryChange = (newCategoryID) => {
    if (!onChange) return;

    onChange({ "category.id": newCategoryID });
  };

  const handlePriceChange = (priceFilter) => {
    if (!onChange) return;

    onChange(priceFilter);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;
