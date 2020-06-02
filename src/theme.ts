import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0087BF",
      light: "rgb(0, 135, 191, 0.6)",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "rgb(242, 244, 245)",
    },
  },
  spacing: 8,
  typography: {
    fontSize: 12,
  },
})
