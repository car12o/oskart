import React, { FunctionComponent } from "react"
import compose from "lodash/fp/compose"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { DeviceContext, useDevice } from "providers/Device"
import { mergeClasses } from "utils/classes"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    width: ({ isMobile }: DeviceContext) => isMobile ? "100%" : "1150px",
    margin: "0 auto",
    padding: ({ isMobile }: DeviceContext) => isMobile ? spacing(0, 1) : "",
  },
}))

export interface SectionProps {
  classes?: ReturnType<typeof useStyles>
}

export const Section: FunctionComponent<SectionProps> = ({ classes: c, children }) => {
  const device = useDevice()
  const classes = compose(
    mergeClasses(c || {}),
    useStyles,
  )(device)

  return (
    <section className={classes.root}>
      {children}
    </section>
  )
}
