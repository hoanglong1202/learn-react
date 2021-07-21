import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles } from "@material-ui/core";
import QuantityField from "components/form-control/QuantityField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

AddToCardForm.propTypes = {
  onsubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  button: {
    width: 250,
  },
}));

function AddToCardForm({ onSubmit = null }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Please input quantity")
      .min(1, "Quantity must be at least at 1")
      .typeError("Please enter a number"),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (!onSubmit) return;

    onSubmit(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField form={form} name="quantity" label="Quantity" />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        className={classes.button}
      >
        Add to cart
      </Button>
    </form>
  );
}

export default AddToCardForm;
