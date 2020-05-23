import React, { FunctionComponent } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import Badge from "@material-ui/core/Badge"
import HomeRounded from "@material-ui/icons/HomeRounded"
import ViewListRounded from "@material-ui/icons/ViewListRounded"
import ShoppingCartRounded from "@material-ui/icons/ShoppingCartRounded"
import EmailRounded from "@material-ui/icons/EmailRounded"

const useStyles = makeStyles({
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
  label: {
    fontSize: "12px",
  },
  icon: {
    fontSize: "25px",
  },
  badge: {
    right: -5,
    top: 10,
  },
})

interface Menu {
  label: string
  route: string
  Icon: FunctionComponent<{ classes: ReturnType<typeof useStyles> }>
}

const menus: Menu[] = [
  {
    label: "Home",
    route: "/",
    Icon: ({ classes }) => <HomeRounded classes={{ root: classes.icon }} />,
  },
  {
    label: "Products",
    route: "/products",
    Icon: ({ classes }) => <ViewListRounded classes={{ root: classes.icon }} />,
  },
  {
    label: "Cart",
    route: "/cart",
    Icon: ({ classes }) => (
      <Badge classes={{ badge: classes.badge }} badgeContent={1} color="primary" >
        <ShoppingCartRounded classes={{ root: classes.icon }} />
      </Badge>
    ),
  },
  {
    label: "Contacts",
    route: "/contacts",
    Icon: ({ classes }) => <EmailRounded classes={{ root: classes.icon }} />,
  },
]

export interface NavigationBottomProps {
  value: string
  visible: boolean
  onChange: (menu: string) => void
}

export const NavigationBottom = ({ value, visible, onChange }: NavigationBottomProps) => {
  const classes = useStyles()

  return (
    <BottomNavigation
      classes={{ root: `${classes.root} ${!visible && classes.hide}` }}
      value={value}
      onChange={(_, menu) => onChange(menu)}
      showLabels
    >
      {menus.map(({ label, route, Icon }) => (
        <BottomNavigationAction
          key={route}
          classes={{ label: classes.label }}
          label={label}
          icon={(<Icon classes={classes} />)}
          value={route}
          disableRipple
        />
      ))}
    </BottomNavigation>
  )
}
