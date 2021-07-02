import { createMuiTheme } from '@material-ui/core/styles'
import { green, red, } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#86967a',
      main: '#55604c',
      dark: '#394431',
      contrastText: 'white',
    },
    secondary: {
      light: '#e2b771',
      main: '#f7b746',
      dark: '#ad761e',
      contrastText: '#7a7131',
    },
      openTitle:green['400'],
      protectedTitle: red['400'],
      type: 'light'
    }
  })

  export default theme