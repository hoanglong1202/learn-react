import { Box, Chip, makeStyles } from "@material-ui/core";
import categoriesApi from "api/categoryApi";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",

    padding: 0,
    margin: theme.spacing(1, 0),
    listStyleType: "none",

    "& > li": {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

function FilterViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  const FILTER_LIST = [
    {
      id: 1,
      getLabel: () => "Giao hàng miễn phí",
      isActive: (filters) => Boolean(filters.isFreeShip),
      isVisible: () => true,
      isRemove: false,
      onRemove: () => {},
      onToggle: (filters) => {
        const newFilter = { ...filters };
        newFilter.isFreeShip
          ? delete newFilter.isFreeShip
          : (newFilter.isFreeShip = true);

        return newFilter;
      },
    },
    {
      id: 2,
      getLabel: () => "Có khuyến mãi",
      isActive: () => true,
      isVisible: (filters) => Boolean(filters.isPromotion),
      isRemove: true,
      onRemove: (filters) => {
        const newFilter = { ...filters };
        delete newFilter.isPromotion;

        return newFilter;
      },
      onToggle: () => {},
    },
    {
      id: 3,
      getLabel: (filters) =>
        `Từ ${new Intl.NumberFormat("vn-VN", {
          style: "currency",
          currency: "VND",
        }).format(filters.salePrice_gte)} đến ${new Intl.NumberFormat("vn-VN", {
          style: "currency",
          currency: "VND",
        }).format(filters.salePrice_lte)}`,
      isActive: () => true,
      isVisible: (filters) =>
        Boolean(filters.salePrice_lte || filters.salePrice_gte),
      isRemove: true,
      onRemove: (filters) => {
        const newFilter = { ...filters };
        delete newFilter.salePrice_lte;
        delete newFilter.salePrice_gte;

        return newFilter;
      },
      onToggle: () => {},
    },
    {
      id: 4,
      getLabel: (filters) => {
        return categories[filters["category.id"] - 1].name;
        // return filters["category.id"]
      },
      isActive: () => true,
      isVisible: (filters) => Boolean(filters["category.id"]),
      isRemove: true,
      onRemove: (filters) => {
        const newFilter = { ...filters };
        delete filters["category.id"];

        return newFilter;
      },
      onToggle: () => {},
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const categoryList = await categoriesApi.getAll();
        setCategories(categoryList);
      } catch (error) {
        console.log("Some thing went wrong went get category api", error);
      }
    })();
  }, []);
  return (
    <Box component="ul" className={classes.root}>
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <li key={x.label}>
          <Chip
            variant="outlined"
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "primary" : "outlined"}
            // clickable={!x.isRemove}
            onDelete={
              x.isRemove &&
              (() => {
                if (!onChange) return;

                const newFilters = x.onRemove(filters);
                onChange(newFilters);
              })
            }
            onClick={
              !x.isRemove
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
