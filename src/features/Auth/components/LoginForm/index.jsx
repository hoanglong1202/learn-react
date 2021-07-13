import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import InputField from "components/form-control/InputField";
import PasswordField from "components/form-control/PasswordField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: theme.spacing(4),
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
  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Please enter your email address.")
      .email("Please enter valid email address."),
    password: yup.string().required("Please enter your password."),
  });

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = form.formState;

  const handleSubmit = async (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Avatar className={classes.avatar}>
          <CodeIcon />
        </Avatar>

        <Typography component="h3" variant="h5" className={classes.title}>
          Sign in
        </Typography>

        <InputField form={form} name="identifier" label="Email" />
        <PasswordField form={form} name="password" label="Password" />

        <Button
          className={classes.submit}
          disabled={isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
