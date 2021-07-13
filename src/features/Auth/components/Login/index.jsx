import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const result = await dispatch(login(values));
      unwrapResult(result);
      
      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      //show Snackbar
      enqueueSnackbar("Login successful!", { variant: "success" });
    } catch (error) {
      console.log("Some errors occer: " + JSON.stringify(error));
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
