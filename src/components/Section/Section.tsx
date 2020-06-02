import React, { FunctionComponent } from "react"
import compose from "lodash/fp/compose"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { DeviceContext, useDevice } from "providers/Device"
import { mergeClasses } from "utils/classes"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    width: ({ isMobile }: DeviceContext) => isMobile ? "100%" : "1150px",
    margin: "0 auto",
    padding: ({ isMobile }: DeviceContext) => isMobile ? spacing(2) : "",
  },
}))

export interface SectionProps {
  classes?: Partial<ReturnType<typeof useStyles>>
}

export const Section: FunctionComponent<SectionProps> = ({ classes: c, children }) => {
  const device = useDevice()
  const classes = compose(
    mergeClasses(c),
    useStyles,
  )(device)

  return (
    <section className={classes.root}>
      {children}
    </section>
  )
}
