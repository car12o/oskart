import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Facebook from "@material-ui/icons/Facebook"
import Twitter from "@material-ui/icons/Twitter"
import { DeviceContext, useDevice } from "providers/Device"
import { Section } from "components/Section"

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    padding: ({ isMobile }: DeviceContext) => isMobile ? "0" : "",
  },
  icon: {
    fontSize: ({ isMobile }: DeviceContext) => isMobile ? "32px" : "25px",
    margin:  ({ isMobile }: DeviceContext) => isMobile ? spacing(0.5, 0, 0, 2.5) : spacing(0.5, 2.5, 0, 0),
    color: ({ isMobile }: DeviceContext) => isMobile ? palette.action.active : "#ffffff",
  },
}))

export const Socials = () => {
  const device = useDevice()
  const classes = useStyles(device)

  return (
    <Section classes={classes} >
      <a href="https://pt-br.facebook.com/oskartRCPT" target="_blank" rel="noopener noreferrer">
        <Facebook className={classes.icon} />
      </a>
      <a href="https://twitter.com/rcoskart" target="_blank" rel="noopener noreferrer">
        <Twitter className={classes.icon} />
      </a>
    </Section>
  )
}
