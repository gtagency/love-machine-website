import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from "themes/default";

import logo from 'logos/agency-black.png';
import cocLogo from 'logos/coc-transparent.png';
import './App.css';
import AppHeader from "./components/AppHeader";
import {makeStyles} from "@material-ui/core/styles";
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

import CssBaseline from "@material-ui/core/CssBaseline";


const useStyles = makeStyles(_ => ({
  root: {
    paddingTop: '1em',
    verticalAlign: 'middle',
  },
  title: {
    color: theme.palette.primary.main,
  },
  subtitle: {
    color: theme.palette.primary.light,
  },
  logoContainer: {
    width: '100%',
    // position: 'relative',
  },
  animatedLogo: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    maxWidth: '40vmin',
  },
  logo: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  animatedIcon: {
    position: 'absolute',
    right: '25%',
    top: '25%',
    color: theme.palette.secondary.main,
  },
  cocLogo: {
    paddingTop: '1em',
    maxWidth: '40vmin',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader/>

        <div className={classes.root}>
          <p id="title" className={classes.title}>
            The Love Machine (Learning) 2:<br/>
            Valentine's Day Edition
          </p>
          <p id="subtitle" className={classes.subtitle}>
            Presented By
          </p>
          <div className={classes.logoContainer}>
            <div className={classes.animatedLogo}>
              <img src={logo} className={classes.logo} alt="logo" />
              <FavoriteTwoToneIcon id="heart" className={classes.animatedIcon} />
            </div>
          </div>
          <img src={cocLogo} className={classes.cocLogo} alt="logo" />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
