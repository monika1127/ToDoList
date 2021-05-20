/* eslint-disable import/no-anonymous-default-export */
import layout from "./layouts";
import text from "./text";
import cards from "./cards";
import buttons from "./buttons";
import forms from "./forms";

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
    danger: "#C95977",
    highlited: "#89c4d9",
  },

  cards,
  buttons,
  text,
  layout,
  forms,
};
