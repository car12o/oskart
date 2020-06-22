import React, { FocusEvent } from "react"
import { compose } from "lodash/fp"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import { mergeClasses } from "utils/classes"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    padding: spacing(0.25, 0.5),
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: spacing(2),
  },
  input: {
    marginLeft: spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

export interface SearchProps {
  classes?: Partial<ReturnType<typeof useStyles>>
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const Search = ({ classes: c, onFocus }: SearchProps) => {
  const classes = compose(
    mergeClasses(c),
    useStyles,
  )()

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Products"
        inputProps={{ "aria-label": "search products" }}
        onFocus={onFocus}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
