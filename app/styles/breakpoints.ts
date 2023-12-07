interface Size {
  small: string
  medium: string
  large: string
}

const size: Size = {
  small: '600px',
  medium: '768px',
  large: '1024px',
}

export const device = {
  mobileMaxWidth: `(max-width: ${size.small})`,
  tabletMinWidth: `(min-width: ${size.medium})`,
  desktopMinWidth: `(min-width: ${size.large})`,
}
