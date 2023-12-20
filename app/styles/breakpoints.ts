interface Size {
  small: string
  medium: string
  large: string
  xlarge: string
}

export const screenSize: Size = {
  small: '600px',
  medium: '768px',
  large: '1200px',
  xlarge: '1920px',
}

export const device = {
  mobileMaxWidth: `(max-width: ${screenSize.small})`,
  tabletMinWidth: `(min-width: ${screenSize.medium})`,
  desktopMinWidth: `(min-width: ${screenSize.large})`,
  largeDesktopMinWidth: `(min-width: ${screenSize.xlarge})`,
}
