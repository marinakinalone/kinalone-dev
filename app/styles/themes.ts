const defaultTheme = {
  color: {
    hightlight: '#c8dbda',
    hover: '#287773',
    focus: '#da2f8d',
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
  filter: {
    primary:
      'invert(88%) sepia(3%) saturate(2310%)hue-rotate(317deg) brightness(107%) contrast(101%)',
    hover: 'invert(38%) sepia(13%) saturate(2135%)hue-rotate(128deg) brightness(96%) contrast(82%)',
    focus:
      'invert(30%) sepia(97%) saturate(1353%) hue-rotate(299deg) brightness(86%) contrast(100%)',
  },
  spacing: {
    xs: '0.5rem',
    s: '1rem',
    m: '1.5rem',
  },
}

export const lightTheme = {
  ...defaultTheme,
  color: {
    background: '#ffe8e2',
    neutral: '#303030',
    secondary: '#f5f5f5',
  },
  border: {
    regular: '1px solid #303030',
  },
}

export const darkTheme = {
  ...defaultTheme,
  color: {
    background: '#11001f',
    neutral: '#f5f5f5',
    secondary: '#303030',
  },
  border: {
    regular: '1px solid #f5f5f5',
  },
}
