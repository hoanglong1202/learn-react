import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@material-ui/core";

ProductSort.propTypes = {
  currenSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currenSort, onChange }) {
  const handleTabChange = (e, newSortValue) => {
    if (onChange) onChange(newSortValue);
  };

  return (
    <Tabs
      value={currenSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleTabChange}
    >
      <Tab label="Giá cao tới thấp" value="salePrice:ASC" />
      <Tab label="Giá thấp tới cao" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
