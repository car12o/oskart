import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0087BF",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  spacing: 4,
  typography: {
    fontSize: 12,
  },
})
