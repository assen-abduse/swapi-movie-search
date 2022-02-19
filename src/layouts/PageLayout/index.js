// prop-types is a library for typechecking of props.
import PropTypes from "prop-types"

// @mui material components
import Box from "@mui/material/Box"

function PageLayout({ children }) {
  return (
    <Box width="100vw" height="100%" minHeight="100vh" sx={{ overflowX: "hidden" }}>
      {children}
    </Box>
  )
}

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
