// @mui material components
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

// theme
import theme from "assets/theme"

// app's router
import MoviesRouter from "routes"

// react-router-dom components
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <MoviesRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
