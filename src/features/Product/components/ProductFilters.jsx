import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";
import { Box } from "@material-ui/core";

ProductFilters.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object.isRequired,
};

function ProductFilters({ filters = {}, onChange }) {
  const handleCategoryChange = (newCategoryID) => {
    if (!onChange) return;

    onChange({ "category.id": newCategoryID });
  };

  const onChangeFilter = (newFilters) => {
    if (!onChange) return;

    onChange(newFilters);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={onChangeFilter} />
      <FilterByService filters={filters} onChange={onChangeFilter} />
    </Box>
  );
}

export default ProductFilters;
