import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  range: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",

    margin: theme.spacing(1, 0),

    "& > span": {
      margin: theme.spacing(0, 1),
    },
  },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyles();
  const [value, setValue] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;

    setValue((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!onChange) return;

    onChange(value);

    setValue({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box className={classes.range}>
        <TextField
          name="salePrice_gte"
          type="number"
          value={value.salePrice_gte}
          onChange={handleValueChange}
        />
        <span> - </span>
        <TextField
          name="salePrice_lte"
          type="number"
          value={value.salePrice_lte}
          onChange={handleValueChange}
        />
      </Box>

      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
