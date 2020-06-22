import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { Category, CategoryProps } from "./Category"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    backgroundColor: "#ffffff",
    margin: spacing(2, 0),
    paddingTop: spacing(1),
  },
  tittle: {
    fontSize: "16px",
    fontWeight: "bold",
    padding: spacing(0, 2),
  },
  container: {
    display: "flex",
    overflow: "scroll",
    padding: spacing(1),
    "&>*": {
      marginRight: spacing(2.5),
    },
    "&>:last-child::after": {
      content: `''`,
      position: "absolute",
      right: spacing(-2),
      width: spacing(2),
      height: spacing(2),
    },
  }
}))

export interface CategoriesProps {
  categories: [CategoryProps]
}

export const Categories = ({ categories }: CategoriesProps) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography classes={{ root: classes.tittle }}>
        Categories
      </Typography>
      <div className={classes.container}>
        {categories.map(({ label, Svg }) => <Category label={label} Svg={Svg} />)}
      </div>
    </Paper>
  )
}
