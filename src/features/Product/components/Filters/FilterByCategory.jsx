import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import categoriesApi from "api/categoryApi";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      const list = await categoriesApi.getAll();
      setCategoryList(list);
    })();
  }, []);

  return (
    <Box>
      <ul>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => onChange(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
