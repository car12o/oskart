import React, { FunctionComponent, ChangeEvent } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import Badge from "@material-ui/core/Badge"
import HomeRounded from "@material-ui/icons/HomeRounded"
import ViewListRounded from "@material-ui/icons/ViewListRounded"
import ShoppingCartRounded from "@material-ui/icons/ShoppingCartRounded"
import EmailRounded from "@material-ui/icons/EmailRounded"
import { DeviceContext, useDevice } from "providers/Device"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  root: {
    position: ({ isMobile }: DeviceContext) => isMobile ? "fixed" : "relative",
    bottom: ({ isMobile }: DeviceContext) => isMobile ? "0" : "",
    left: ({ isMobile }: DeviceContext) => isMobile ? "0" : "",
    width: ({ isMobile }: DeviceContext) => isMobile ? "100vw" : "",
    height: ({ isMobile }: DeviceContext) => isMobile ? "50px" : "",
    boxShadow: ({ isMobile }: DeviceContext) => isMobile ? "0px -2px 2px 0px rgba(0,0,0,0.2)" : "",
    transition: "bottom 0.5s",
  },
  hide: {
    bottom: ({ isMobile }: DeviceContext) => isMobile ? "-50px" : "",
  },
  action: {
    "&:hover": {
      color: ({ isMobile }: DeviceContext) => isMobile ? "" : palette.primary.light,
    },
  },
  label: {
    fontSize: ({ isMobile }: DeviceContext) => isMobile ? "12px" : "14px",
    margin: spacing(0, 2),
  },
  icon: {
    fontSize: ({ isMobile }: DeviceContext) => isMobile ? "25px" : "30px",
  },
  badge: {
    right: -5,
    top: 10,
  },
}))

interface Menu {
  route: string
  Label: FunctionComponent<{ classes: ReturnType<typeof useStyles> }>
  Icon: FunctionComponent<{ classes: ReturnType<typeof useStyles> }>
}

const menus: Menu[] = [
  {
    route: "/",
    Label: ({ classes }) => <span className={classes.label}>Home</span>,
    Icon: ({ classes }) => <HomeRounded classes={{ root: classes.icon }} />,
  },
  {
    route: "/products",
    Label: ({ classes }) => <span className={classes.label}>Products</span>,
    Icon: ({ classes }) => <ViewListRounded classes={{ root: classes.icon }} />,
  },
  {
    route: "/cart",
    Label: ({ classes }) => <span className={classes.label}>Cart</span>,
    Icon: ({ classes }) => (
      <Badge classes={{ badge: classes.badge }} badgeContent={1} color="primary" >
        <ShoppingCartRounded classes={{ root: classes.icon }} />
      </Badge>
    ),
  },
  {
    route: "/contacts",
    Label: ({ classes }) => <span className={classes.label}>Contacts</span>,
    Icon: ({ classes }) => <EmailRounded classes={{ root: classes.icon }} />,
  },
]

export interface NavigationBottomProps {
  menu: string
  visible: boolean
  onChange: (event: ChangeEvent<{}>, menu: string) => void
}

export const NavigationBottom = ({ menu, visible, onChange }: NavigationBottomProps) => {
  const device = useDevice()
  const classes = useStyles(device)

  return (
    <BottomNavigation
      classes={{ root: `${classes.root} ${!visible && classes.hide}` }}
      value={menu}
      onChange={onChange}
      showLabels
    >
      {menus.map(({ Label, route, Icon }) => (
        <BottomNavigationAction
          key={route}
          className={classes.action}
          label={<Label classes={classes} />}
          icon={<Icon classes={classes} />}
          value={route}
          disableRipple
        />
      ))}
    </BottomNavigation>
  )
}
