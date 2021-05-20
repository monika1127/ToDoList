/* eslint-disable import/no-anonymous-default-export */
export default {
  primary: {
    color: "white",
    cursor: "pointer",
    bg: "primary",
    transition: "all 0.2s ease-in",
    "&:hover": {
      bg: "secondary",
    },
  },
  deleteActive: {
    color: "white",
    cursor: "pointer",
    bg: "primary",
    transition: "all 0.2s ease-in",
    "&:hover": {
      bg: "danger",
    },
  },
  deleteMuted: {
    color: "white",
    cursor: "pointer",
    bg: "muted",
    transition: "all 0.2s ease-in",
    "&:hover": {
      bg: "danger",
    },
  },

  checkMuted: {
    color: "white",
    cursor: "pointer",
    bg: "muted",
    transition: "all 0.2s ease-in",
    "&:hover": {
      bg: "primary",
    },
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
    width: "48px",
    height: "48px",
    display: "flex",
    transition: 'all 0.2s ease-in',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },
};
