import React, { Component } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { compose } from "lodash/fp"
import {
  createStyles,
  WithStyles,
  withStyles,
  BottomNavigation,
  BottomNavigationAction,
  Badge,
} from "@material-ui/core"
import { HomeRounded, ViewListRounded, ShoppingCartRounded, EmailRounded } from "@material-ui/icons"

const styles = createStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
    height: "50px",
    transition: "bottom 0.5s",
    boxShadow: "0px -2px 2px 0px rgba(0,0,0,0.2)",
  },
  hide: {
    bottom: "-48px",
  },
  navigationIcon: {
    fontSize: "25px",
  },
  actionLabel: {
    fontSize: "12px",
  },
  actionBadge: {
    right: -5,
    top: 10,
  },
})

interface Menu {
  label: string,
  icon: JSX.Element,
  value: string,
}

const useMenus = ({ classes }: WithStyles<typeof styles>): Menu[] => [
  { label: "Home", icon: <HomeRounded classes={{ root: classes.navigationIcon }} />, value: "/" },
  { label: "Products", icon: <ViewListRounded classes={{ root: classes.navigationIcon }} />, value: "/products" },
  {
    label: "Cart",
    icon: (
      <Badge classes={{ badge: classes.actionBadge }} badgeContent={1} color="primary">
        <ShoppingCartRounded classes={{ root: classes.navigationIcon }} />
      </Badge>
    ),
    value: "/cart",
  },
  { label: "Contacts", icon: <EmailRounded classes={{ root: classes.navigationIcon }} />, value: "/contacts" },
]

export interface NavigationProps extends WithStyles<typeof styles>, RouteComponentProps { }

export interface NavigationState {
  menus: Menu[],
  menu: string,
  visible: boolean,
  prevScrollpos: number,
}

class Navigation$ extends Component<NavigationProps, NavigationState> {
  constructor(props: NavigationProps) {
    super(props)
    const { classes } = props
    const menus = useMenus({ classes })
    this.state = {
      menus,
      menu: menus[0].value,
      visible: true,
      prevScrollpos: 0,
    }
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
    const { menus, menu, visible } = this.state
    const { classes, children } = this.props

    return (
      <>
        <BottomNavigation
          classes={{ root: `${classes.root} ${!visible && classes.hide}` }}
          value={menu}
          onChange={(_, menu) => this.onChange(menu)}
          showLabels
        >
          {menus.map(({ label, icon, value }) => (
            <BottomNavigationAction
              key={value}
              classes={{ label: classes.actionLabel }}
              label={label}
              icon={icon}
              value={value}
              disableRipple
            />
          ))}
        </BottomNavigation>
        {children}
      </>
    )
  }
}

export const Navigation = compose(
  withRouter,
  withStyles(styles),
)(Navigation$)
