import React, { useState, useLayoutEffect, memo } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import TuneRounded from "@material-ui/icons/TuneRounded"
import { Section } from "components/Section"
import { Input } from "components/Input"
import { Socials } from "./Socials"
import { NavigationBottomProps, NavigationBottom } from "./NavigationBottom"
import Logo from "img/logo.png"

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  root: {
    position: "fixed",
    top: "0",
    zIndex: 1,
    padding: 0,
  },
  banner: {
    position: "relative",
    height: "52px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
  },
  container: {
    position: "absolute",
    width: "92%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "0.5s",
  },
  opacity: {
    opacity: 0,
  },
  search: {
    height: "35px",
    margin: 0,
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.35)",
  },
  section: {
    marginTop: spacing(1.5),
    transition: "0.5s",
  },
  filter: {
    fontSize: "32px",
    color: palette.action.active,
    marginLeft: spacing(2),
  },
  img: {
    width: "142px",
    paddingBottom: spacing(0.5),
  },
}))

export interface NavigationMobileProps extends NavigationBottomProps {
  refCurrent: false | HTMLElement | null
  setVisible: (visible: boolean) => void
}

export const NavigationMobile = memo(({ menu, visible, onChange, refCurrent, setVisible }: NavigationMobileProps) => {
  const classes = useStyles()
  const rect = refCurrent && refCurrent.getBoundingClientRect()
  const [top, setTop] = useState(rect && rect.top)
  const swap = top && top >= 90

  useLayoutEffect(() => {
    setTop(rect && rect.top)
  }, [rect])

  return (
    <Section classes={classes}>
      <Section classes={{ root: classes.banner }}>
        <div className={`${classes.container} ${(refCurrent && !swap) && classes.opacity}`.trim()}>
          <img className={classes.img} src={Logo} alt="Oskart RC" />
          <Socials />
        </div>
        <div className={`${classes.container} ${(!refCurrent || swap) && classes.opacity}`.trim()}>
          <Input classes={{ root: classes.search }} onFocus={() => setVisible(false)} />
          <TuneRounded className={classes.filter} />
        </div>
        <NavigationBottom
          menu={menu}
          visible={visible}
          onChange={onChange}
        />
      </Section>
      <Section classes={{ root: `${classes.section} ${(!refCurrent || !swap) && classes.opacity}`.trim() }}>
        <Input onFocus={() => setVisible(false)} />
      </Section>
    </Section>
  )
})
