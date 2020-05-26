import React from "react"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Section } from "components/Section"
import { Socials } from "./Socials"
import { NavigationBottomProps, NavigationBottom } from "./NavigationBottom"
import Logo from "img/logo.png"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    position: "fixed",
    top: "0",
    width: "100%",
    height: "100px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.2)",
  },
  header: {
    height: "30px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: "200px",
    paddingBottom: spacing(0.5),
  },
  icon: {
    fontSize: "25px",
    margin: spacing(0.5, 0, 0, 2.5),
    color: "#ffffff",
  },
}))

export interface NavigationDesktopProps extends NavigationBottomProps { }

export const NavigationDesktop = ({ menu, visible, onChange }: NavigationDesktopProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Socials />
      </div>
      <Section classes={{ root: classes.section }}>
        <img className={classes.img} src={Logo} alt="Oskart RC" />
        <NavigationBottom
          menu={menu}
          visible={visible}
          onChange={onChange}
        />
      </Section>
    </div>
  )
}
