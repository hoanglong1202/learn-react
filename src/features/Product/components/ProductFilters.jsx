import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./Filters/FilterByCategory";

ProductFilters.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object.isRequired,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryID) => {
    if (onChange) onChange({ ...filters, "category.id": newCategoryID });
  };

  return (
    <div>
      <FilterByCategory onChange={handleCategoryChange} />
    </div>
  );
}

export default ProductFilters;
