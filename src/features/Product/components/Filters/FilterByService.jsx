import {
  Box, Checkbox, FormControlLabel, makeStyles, Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  list: {
    margin: 0,
    padding: 0,

    "& > li": {
      margin: 0,
    },
  },
}));

function FilterByService({ filters, onChange }) {
  const classes = useStyles();

  const handleValueChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  const serviceList = [
    { value: "isPromotion", label: "Có khuyến mãi" },
    { value: "isFreeShip", label: "Vận chuyển miễn phí" },
  ];

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <ul className={classes.list}>
        {serviceList.map((service) => (
          <FormControlLabel
            key={service.value}
            label={service.label}
            control={
              <Checkbox
                checked={Boolean(filters[service.value])}
                onChange={handleValueChange}
                name={service.value}
                color="primary"
              />
            }
          />
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
