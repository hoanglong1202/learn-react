import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import categoriesApi from "api/categoryApi";
import { Skeleton } from "@material-ui/lab";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    margin: 0,
    padding: 0,
    listStyleType: "none",

    "& > li": {
      marginTop: theme.spacing(1),
      transition: "all 0.25s",

      "&:hover": {
        color: theme.palette.primary.dark,
        cursor: "pointer",
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoriesApi.getAll();
        setCategoryList(list);

        setLoading(false);
      } catch (error) {
        console.log("Some thing error when load category api: ", error);
      }
    })();
  }, []);

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>

      {loading ? (
        <>
          {Array.from(new Array(5)).map((_, index) => (
            <Skeleton key={index} width="85%" />
          ))}
        </>
      ) : (
        <ul className={classes.menu}>
          {categoryList.map((category) => (
            <li key={category.id} onClick={() => onChange(category.id)}>
              <Typography variant="body2">{category.name}</Typography>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}

export default FilterByCategory;
