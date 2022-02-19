// @mui material components
import { createTheme } from "@mui/material/styles"

/**
 * This function can be used to alter the base theme
 * of the MUI components
 * Here we are changing some theme properties for demo
 * purpose
 */

export default createTheme({
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    background: {
      default: "#191919",
    },
    primary: {
      main: "#191919",
      focus: "#191919",
    },
    secondary: {
      main: "#191919",
      focus: "#191919",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minWidth: 0,
          wordWrap: "break-word",
          backgroundColor: "#f0f2f5",
          backgroundClip: "border-box",
          borderRadius: "2rem",
          overflow: "visible",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        "*, *::before, *::after": {
          margin: 0,
          padding: 0,
        },
        "a, a:link, a:visited": {
          textDecoration: "none !important",
          color: "#ffffff",
        },
        "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
          color: `#ffffff !important`,
          transition: "color 150ms ease-in !important",
        },
        "a.link:hover, .link:hover, a.link:focus, .link:focus": {
          color: `#ffffff !important`,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: "2rem",
          margin: `2rem 2rem 0`,
        },

        media: {
          width: "auto",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
          padding: "1rem 3rem erem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
        color: "inherit",
      },
    },
  },
})
