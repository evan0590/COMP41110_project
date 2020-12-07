import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import CustomDialog from "./CustomDialog";

function refreshPage() {
  window.location.href = "/";
}

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  title: {
    flexGrow: 1,
    color: "white",
    cursor: "default",
  },
});

class CustomLayout extends React.Component {
  state = {
    dialogOpened: false,
  };

  toggleDialog = (booleanValue) => () => {
    this.setState({
      dialogOpened: booleanValue,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="add an event"
              onClick={this.toggleDialog(true)}
              edge="start"
            >
              <AddIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cloud Computing - Online Calendar
            </Typography>
            <MenuItem key="1">
              <Link
                onClick={() => {
                  refreshPage();
                }}
              >
                Events
              </Link>
            </MenuItem>
            {this.props.isAuthenticated ? (
              <MenuItem key="2" onClick={this.props.logout}>
                Logout
              </MenuItem>
            ) : (
              <MenuItem key="2">
                <Link to="/login">Login</Link>
              </MenuItem>
            )}
          </Toolbar>
        </AppBar>
        <CustomDialog
          dialogOpened={this.state.dialogOpened}
          toggleDialog={this.toggleDialog}
        ></CustomDialog>

        <main style={{ width: "100vw" }}>
          <div className={classes.drawerHeader} />
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withStyles(useStyles, { withTheme: true })(
  withRouter(connect(null, mapDispatchToProps)(CustomLayout))
);
