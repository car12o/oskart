import React from "react"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Section } from "components/Section"
import { Socials } from "./Socials"
import { NavigationBottomProps, NavigationBottom } from "./NavigationBottom"
import Logo from "img/logo.png"

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  root: {
    position: "fixed",
    top: "0",
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.2)",
  },
  img: {
    width: "142px",
    paddingBottom: spacing(0.5),
  },
  icon: {
    fontSize: "32px",
    marginLeft: spacing(2.5),
    color: palette.action.active,
  },
}))

export interface NavigationMobileProps extends NavigationBottomProps { }

export const NavigationMobile = ({ menu, visible, onChange }: NavigationMobileProps) => {
  const classes = useStyles()

  return (
    <Section classes={classes}>
      <img className={classes.img} src={Logo} alt="Oskart RC" />
      <Socials />
      <NavigationBottom
        menu={menu}
        visible={visible}
        onChange={onChange}
      />
    </Section>
  )
}
