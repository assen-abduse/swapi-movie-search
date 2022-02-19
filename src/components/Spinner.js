import * as React from "react"

// @mui material components
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function Spinner() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 16,
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <CircularProgress size="72px" sx={{ color: "#FFFFFF" }} />
        <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
          Please wait...
        </Typography>
      </Stack>
    </Box>
  )
}
