import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "components/form-control/InputField";
import {
  Avatar,
  makeStyles,
  Typography,
  Theme,
  Button,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 0),
  },
  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    margin: theme.spacing(2, 0, 4, 0),
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

RegisterForm.propTypes = {
  onsubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    title: yup.string().required("Please enter title"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) onSubmit(values);

    form.reset();
  };

  return (
    <div className={classes.root}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Avatar className={classes.avatar}>
          <CodeIcon />
        </Avatar>

        <Typography component="h3" variant="h5" className={classes.title}>
          Create an Account
        </Typography>

        <InputField form={form} name="fullName" label="Full Name" />
        <InputField form={form} name="email" label="Email" />
        <InputField form={form} name="password" label="Password" />
        <InputField form={form} name="retypePassword" label="Retype Password" />

        <Button
          className={classes.submit}
          fullWidth
          variant="contained"
          color="primary"
        >
          Create An Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
