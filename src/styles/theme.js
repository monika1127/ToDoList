/* eslint-disable import/no-anonymous-default-export */
export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#2ea8cc",
    secondary: "#03c29f",
    secondaryLight: "#80ddca",
    muted: "#f6f6f6",
    danger: "#C95977"
  },
  cards: {
    primary: {
      borderBottom: "1px solid",
      display: "flex",
      justifyContent: "space-between",
      alignItems: 'center',
      borderColor: "primary",
      py: 2
    },
    muted: {
      borderBottom: "1px solid",
      display: "flex",
      justifyContent: "space-between",
      borderColor: "muted",
      alignItems: 'center',
      py: 2
    },
  },

  buttons: {
    primary: {
      color: "white",
      cursor: "pointer",
      bg: "primary",
      transition: 'all 0.2s ease-in',
      '&:hover': {
        bg: 'secondaryLight'
      }
    },
    deleteActive: {
      color: "white",
      cursor: "pointer",
      bg: "primary",
      transition: 'all 0.2s ease-in',
      '&:hover': {
        bg: 'danger'
      }
    },
    deleteMuted: {
      color: "white",
      cursor: "pointer",
      bg: "muted",
      transition: 'all 0.2s ease-in',
      '&:hover': {
        bg: 'danger'
      }
    },

    checkMuted: {
      color: "white",
      cursor: "pointer",
      bg: "muted",
      transition: 'all 0.2s ease-in',
      '&:hover': {
        bg: 'primary'
      }
    },
    checkActive: {
      color: "white",
      cursor: "pointer",
      bg: "white",
      border: "2px solid",
      borderColor: "primary",
      transition: 'all 0.2s ease-in',
      '&:hover': {
        bg: 'secondaryLight',
        borderColor: "secondary",
      }
    },
    nav: {
      color: "white",
      cursor: "pointer",
      bg: "secondaryLight",
      padding: 2,
      width: "48px",
      height: "48px",
      display: "flex",
      transition: 'all 0.2s ease-in',
      m: 2,
      '&:hover': {
        transform: 'scale(1.1)',
      }
    },
  },
  text: {
    header: {
      fontSize: 3,
      fontWeight: "bold",
      color: "primary",
      py: 2
    },
    nav: {
      fontSize: 5,
      fontWeight: "bold",
      color: "white",
    },
  },
  layout: {
    circle: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      display: 'flex',
      bg:"secondaryLight"
    },
    centered:{
      display: 'flex',
      alignItems: "center",
      justifyContent: "flex-end"
    },
    body:{
      display: "block",
      px: 3,
      py: 3,
      maxWidth: '600px'
    }
  },
};
