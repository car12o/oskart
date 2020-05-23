import React, { Component } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { compose } from "lodash/fp"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import createStyles from "@material-ui/core/styles/createStyles"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { NavigationHeader } from "./NavigationHeader"
import { NavigationBottom } from "./NavigationBottom"

const styles = ({ spacing }: Theme) => createStyles({
  content: {
    marginTop: "55px",
    padding: spacing(0, 3),
  },
})

export interface NavigationProps extends WithStyles<typeof styles>, RouteComponentProps { }

export interface NavigationState {
  menu: string
  visible: boolean
  prevScrollpos: number
}

class Navigation$ extends Component<NavigationProps, NavigationState> {
  state = {
    menu: "",
    visible: true,
    prevScrollpos: 0,
  }

  componentDidMount() {
    const { location } = this.props
    this.setState({ menu: location.pathname })
    window.addEventListener("scroll", () => this.onScroll())
  }

  onScroll() {
    const { prevScrollpos } = this.state
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos
    this.setState({
      visible,
      prevScrollpos: currentScrollPos,
    })
  }

  onChange(menu: string) {
    const { history } = this.props
    this.setState({ menu })
    history.push(menu)
  }

  render() {
    const { menu, visible } = this.state
    const { classes, children } = this.props

    return (
      <>
        <NavigationHeader />
        <NavigationBottom value={menu} visible={visible} onChange={this.onChange} />
        <div className={classes.content}>
          {children}
        </div>
      </>
    )
  }
}

export const Navigation = compose(
  withRouter,
  withStyles(styles),
)(Navigation$)
