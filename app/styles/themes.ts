const defaultTheme = {
  color: {
    highlight: '#cadede',
  },
  fontFamily: `'Fira Code', monospace`,
  fontSize: {
    regular: {
      xs: '0.75rem',
      s: '1rem',
      m: '1.15rem',
      l: '1.5',
      xl: '1.75rem',
    },
    desktop: {
      xs: '0.9rem',
      s: '1.1rem',
      m: '1.3rem',
      l: '1.5',
      xl: '2rem',
    },
  },
  spacing: {
    xs: '0.5rem',
    s: '1rem',
    m: '1.5rem',
    l: '2rem',
    xl: '2.5rem',
  },
  arrow: {
    textArrowSpace: '16',
    shaftWidth: '1',
    newshaftWidth: '64',
    shaftThickness: '1',
    headWidth: '8',
    headThickness: '1',
  },
}

export const lightTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    background: '#ffe8e2',
    neutral: '#303030',
    secondary: '#f5f5f5',
    hover: '#0c5d5f',
    focus: '#a3005a',
  },
  filter: {
    // based on color.background
    primary:
      'invert(88%) sepia(6%) saturate(1248%) hue-rotate(316deg) brightness(107%) contrast(101%)',
    hover: 'invert(66%) sepia(54%) saturate(229%) hue-rotate(135deg) brightness(87%) contrast(92%)',
    focus:
      'invert(11%) sepia(59%) saturate(6186%) hue-rotate(314deg) brightness(94%) contrast(118%)',
  },
  border: {
    regular: '1px solid #303030',
    highlight: '1rem solid #303030',
  },
}

export const darkTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    background: '#11001f',
    neutral: '#f5f5f5',
    secondary: '#171717',
    hover: '#70aeb2',
    focus: '#dd78b0',
  },
  filter: {
    // based on color.background
    primary:
      'invert(5%) sepia(71%) saturate(5152%) hue-rotate(276deg) brightness(52%) contrast(111%)',
    hover: 'invert(27%) sepia(80%) saturate(437%) hue-rotate(133deg) brightness(93%) contrast(97%)',
    focus:
      'invert(86%) sepia(20%) saturate(6859%) hue-rotate(286deg) brightness(91%) contrast(88%)',
  },
  border: {
    regular: '1px solid #f5f5f5',
    highlight: '1rem solid #f5f5f5',
  },
}
