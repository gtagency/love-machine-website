import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      light: '#ff300a',
      main: '#ed7e79',
      dark: '#ac1a00',
      // contrastText: '#ffcc00',
    },
    background: {
      default: "#fffdfe",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default defaultTheme;