import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';

import logo from "logos/agency-white.png";

const useStyles = makeStyles(theme => ({
  collaboration: {
    marginRight: theme.spacing(1),
  },
  logo: {
    height: '1em',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  left: {
    flex: 1,
    textAlign: 'left',
  },
  center: {
    flex: 2,
    textAlign: 'center',
  },
  right: {
    flex: 1,
    textAlign: 'right',
  }
}));

function AppHeader() {
  const classes = useStyles();

  return (
  <AppBar position={"static"} color={"primary"} className={classes.root}>
    <Toolbar>
      <div className={classes.left}>
        <IconButton edge="start" className={classes.collaboration} color="inherit" aria-label="menu">
          <FavoriteIcon/>
          <ClearIcon/>
          <img src={logo} className={classes.logo} alt="logo"/>
        </IconButton>
      </div>

      <div className={classes.center}>
        <Typography varient={"h3"} className={classes.title}>
          The Love Machine
        </Typography>
      </div>
      <div className={classes.right}>
        {/*Empty Flex Space*/}
      </div>

    </Toolbar>
  </AppBar>
  );
}

export default AppHeader;