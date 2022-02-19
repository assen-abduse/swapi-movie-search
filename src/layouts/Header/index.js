import * as React from "react"

// @mui material components
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

// react-router-dom components
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" color="inherit" component="div">
              Swapi Movie Search
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
