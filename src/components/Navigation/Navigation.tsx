import React, { Component, RefObject, createRef } from "react"
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
  products: {
    marginTop: ({ device }: WithDevice) => device.isMobile ? "120px" : "auto",
  },
})

export interface NavigationProps extends WithStyles<typeof styles>, RouteComponentProps, WithDevice { }

export interface NavigationState {
  menu: string
  visible: boolean
  prevScrollpos: number
}

class Navigation$ extends Component<NavigationProps, NavigationState> {
  private ref: RefObject<HTMLElement>

  constructor(props: NavigationProps) {
    super(props)
    this.state = {
      menu: "",
      visible: true,
      prevScrollpos: 0,
    }
    this.ref = createRef()
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

      if (visible || currentScrollPos <= 40) {
        const element = document.activeElement as HTMLElement
        element.blur()
      }

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
    window.scroll(0, 0)
  }

  render() {
    const { menu, visible } = this.state
    const { classes, device, children } = this.props
    const isProducts = menu === "/products"

    return (
      <>
        {device.isMobile && (
          <NavigationMobile
            menu={menu}
            visible={visible}
            onChange={(_, menu) => this.onChange(menu)}
            refCurrent={isProducts && this.ref.current}
            setVisible={(visible: boolean) => this.setState({ visible })}
          />
        )}

        {device.isDesktop && (
          <NavigationDesktop
            menu={menu}
            visible={visible}
            onChange={(_, menu) => this.onChange(menu)}
          />
        )}
        <Section
          ref={this.ref}
          classes={{ root: `${classes.root} ${isProducts && classes.products}`.trim() }}
        >
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
