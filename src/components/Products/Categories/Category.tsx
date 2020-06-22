import React, { FunctionComponent, SVGProps } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  root: {
    maxWidth: "85px",
    minWidth: "85px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: palette.action.active,
    padding: spacing(1.5),
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  img: {
    width: "100%",
    fill: "white",
  },
}))

export interface CategoryProps {
  label: string
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>
}

export const Category = ({ label, Svg }: CategoryProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Svg className={classes.img} />
      </div>
      <Typography>
        {label}
      </Typography>
    </div>
  )
}
