import React, { SyntheticEvent } from "react"
import compose from "lodash/fp/compose"
import { makeStyles, Theme } from "@material-ui/core/styles"
import MuiCard from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import AddShoppingCartRounded from "@material-ui/icons/AddShoppingCartRounded"
import { mergeClasses } from "utils/classes"

const useStyles = makeStyles(({ palette }: Theme) => ({
  root: {
    width: "50%",
  },
  media: {
    width: "100%",
    height: 140,
  },
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  label: {
    fontSize: "14px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  iconContent: {
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    fontSize: "30px",
    color: palette.action.active,
  },
}))

export interface CardProps {
  classes?: Partial<ReturnType<typeof useStyles>>
  label: string
  price: number
}

export const Card = ({ classes: c, label, price }: CardProps) => {
  const classes = compose(
    mergeClasses(c),
    useStyles,
  )()

  return (
    <MuiCard classes={{ root: classes.root }} onClick={() => alert("Card")}>
      <CardActionArea classes={{ root: classes.container }}>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent classes={{ root: classes.content }}>
          <div>
            <Typography
              classes={{ root: classes.label }}
              variant="subtitle1"
              component="p"
              gutterBottom
            >
              {label}
            </Typography>
            <Typography
              classes={{ root: classes.price }}
              variant="subtitle1"
              component="p"
            >
              {price} €
          </Typography>
          </div>
          <div className={classes.iconContent}>
            <AddShoppingCartRounded
              classes={{ root: classes.icon }}
              onClick={(e: SyntheticEvent) => {
                e.stopPropagation()
                alert("Add to cart")
              }}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  )
}
