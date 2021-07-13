import {
  Button,
  Dialog, DialogContent,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import CodeIcon from "@material-ui/icons/Code";
import Login from "features/Auth/components/Login";
import Register from "features/Auth/components/Register";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      textDecoration: "none",
      color: "#fff",
    },
    closeButton: {
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(1),
      zIndex: 1,
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              Accel Shop
            </Link>
          </Typography>

          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">To do</Button>
          </NavLink>
          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Album</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen}>
            Resgister
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        open={open}
        aria-labelledby="form-dialog-title"
        onClose={(event, backdropClick) => handleClose}
      >
        <IconButton className={classes.closeButton} onClick={handleClose} >
          <Close />
        </IconButton>
        <DialogContent>
          {/* <Register closeDialog={handleClose} /> */}
          <Login closeDialog={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
