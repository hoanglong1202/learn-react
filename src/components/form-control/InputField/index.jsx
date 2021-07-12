import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { control, formState } = form;
  const hasError =
    formState.touchedFields && formState.errors[name] ? true : false;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          disabled={disabled}
          error={hasError}
          margin="normal"
          variant="outlined"
          helperText={formState.errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
