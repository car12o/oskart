import React, { Component } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { compose } from "lodash/fp"
import createStyles from "@material-ui/core/styles/createStyles"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { WithDevice, withDevice } from "providers/Device"
import { Section } from "components/Section"
import { NavigationMobile } from "./NavigationMobile"
import { NavigationDesktop } from "./NavigationDesktop"

const styles = createStyles({
  root: {
    margin: ({ device }: WithDevice) => device.isMobile ? "52px 0 50px 0" : "100px 0 0 0",
  },
})

export interface NavigationProps extends WithStyles<typeof styles>, RouteComponentProps, WithDevice { }

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
    const { device } = this.props
    if (device.isMobile) {
      const { prevScrollpos } = this.state
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollpos > currentScrollPos
      this.setState({
        visible,
        prevScrollpos: currentScrollPos,
      })
    }
  }

  onChange(menu: string) {
    const { history } = this.props
    this.setState({ menu })
    history.push(menu)
  }

  render() {
    const { menu, visible } = this.state
    const { classes, device, children } = this.props

    return (
      <>
        {device.isMobile && (
          <NavigationMobile
            menu={menu}
            visible={visible}
            onChange={(_, menu) => this.onChange(menu)}
          />
        )}

        {device.isDesktop && (
          <NavigationDesktop
            menu={menu}
            visible={visible}
            onChange={(_, menu) => this.onChange(menu)}
          />
        )}
        <Section classes={classes}>
          {children}
        </Section>
      </>
    )
  }
}

export const Navigation = compose(
  withDevice,
  withRouter,
  withStyles(styles),
)(Navigation$)
