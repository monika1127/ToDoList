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
  },
  cards: {
    primary: {
      borderBottom: "1px solid",
      display: "flex",
      justifyContent: "space-between",
      borderColor: "primary",
    },
    muted: {
      borderBottom: "1px solid",
      display: "flex",
      justifyContent: "space-between",
      borderColor: "muted",
    },
  },

  buttons: {
    primary: {
      color: "white",
      cursor: "pointer",
      bg: "primary",
    },
    muted: {
      color: "white",
      cursor: "pointer",
      bg: "muted",
    },
    primaryEmpty: {
      color: "white",
      cursor: "pointer",
      bg: "white",
      border: "2px solid",
      borderColor: "primary",
    },
    nav: {
      color: "white",
      cursor: "pointer",
      bg: "secondaryLight",
      padding: 2,
      width: "48px",
      height: "48px",
      display: "flex",
      m: 2,
    },
  },

  text: {
    header: {
      fontSize: 4,
      fontWeight: "bold",
      color: "primary",
    },
    nav: {
      fontSize: 4,
      fontWeight: "bold",
      color: "white",
    },

  },
};
