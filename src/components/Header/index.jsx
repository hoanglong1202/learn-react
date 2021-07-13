import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import CodeIcon from "@material-ui/icons/Code";
import Login from "features/Auth/components/Login";
import Register from "features/Auth/components/Register";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { logOut } from "features/Auth/userSlice";

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

const MODE = {
  REGISTER: "register",
  LOGIN: "login",
};

export default function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const currentUser = useSelector((state) => state.user.current);
  const isLogged = currentUser.id ? true : false;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleUserLogOut = () => {
    dispatch(logOut());
    setAnchorEl(null);

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

          {!isLogged && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}

          {isLogged && (
            <IconButton color="inherit" onClick={handleOpenMenu}>
              <AccountCircleIcon color="inherit" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        getContentAnchorEl={null}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleUserLogOut}>Logout</MenuItem>
      </Menu>

      <Dialog
        disableEscapeKeyDown
        open={open}
        aria-labelledby="form-dialog-title"
        onClose={(event, backdropClick) => handleClose}
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account? Login here.
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account? Register here.
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
