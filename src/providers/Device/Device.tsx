import React, { Component, FunctionComponent, createContext, useContext } from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"

export interface DeviceContext {
  isMobile: boolean
  isDesktop: boolean
}

export interface WithDevice {
  device: DeviceContext
}

const DeviceContext = createContext({
  isMobile: false,
  isDesktop: true,
})

export const DeviceProvider: FunctionComponent = ({ children }) => {
  const matches = useMediaQuery("(max-width:780px)")
  return (
    <DeviceContext.Provider value={{
      isMobile: matches,
      isDesktop: !matches,
    }}
    >
      {children}
    </DeviceContext.Provider>
  )
}

export const useDevice = () => useContext(DeviceContext)

export const withDevice: <P>(C: new () => Component<P>) => FunctionComponent<P & WithDevice> =
  (C) => ({ ...props }) => {
    const device = useDevice()
    return <C device={device} {...props} />
  }
