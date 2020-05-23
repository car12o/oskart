import React from "react"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Facebook from "@material-ui/icons/Facebook"
import Twitter from "@material-ui/icons/Twitter"
import Logo from "img/logo.png"

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  root: {
    position: "fixed",
    top: "0",
    width: "100%",
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing(0, 3),
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.2)",
  },
  img: {
    width: "142px",
    paddingBottom: "5px",
  },
  icon: {
    fontSize: "32px",
    marginLeft: "20px",
    color: palette.action.active,
  },
}))

export const NavigationHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img className={classes.img} src={Logo} alt="Oskart RC" />
      <div>
        <a href="https://pt-br.facebook.com/oskartRCPT" target="_blank" rel="noopener noreferrer">
        <Facebook className={classes.icon} />
        </a>
        <a href="https://twitter.com/rcoskart" target="_blank" rel="noopener noreferrer">
        <Twitter className={classes.icon} />
        </a>
      </div>
    </div>
  )
}
