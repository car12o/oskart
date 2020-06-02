import React from "react"
import chunk from "lodash/fp/chunk"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Card } from "./Card"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  row: {
    display: "flex",
  },
  cardLeft: {
    margin: spacing(0.5, 0.5, 0.5, 0),
  },
  cardRight: {
    margin: spacing(0.5, 0, 0.5, 0.5),
  },
  cardTop: {
    marginTop: 0,
  },
}))

export interface CardListProps {
  products: {
    label: string,
    price: number,
  }[]
}

export const CardList = ({ products }: CardListProps) => {
  const classes = useStyles()

  return (
    <>
      {chunk(2, products)
        .map(([left, right]: CardListProps["products"], i: number) => (
          <div className={classes.row} key={`card-list-${i}`}>
            {left && (
              <Card
                classes={{ root: `${classes.cardLeft} ${!i && classes.cardTop}` }}
                label={left.label}
                price={left.price}
              />
            )}
            {right && (
              <Card
                classes={{ root: `${classes.cardRight} ${!i && classes.cardTop}` }}
                label={right.label}
                price={right.price}
              />
            )}
          </div>
        ))}
    </>
  )
}
