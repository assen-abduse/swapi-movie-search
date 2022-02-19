// prop-types is a library for typechecking of props
import PropTypes from "prop-types"

// @mui material components
import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

// character avatar placeholder image
import characterAvatar from "assets/images/avatar.jpg"

function CharacterCard({ character }) {
  const { name, gender, height } = character
  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar src={characterAvatar} sx={{ height: 56, width: 56 }} />
          <Stack direction="column">
            <Typography gutterBottom variant="body1">
              Name: {name}
            </Typography>
            <Typography gutterBottom variant="body2">
              Gender: {gender}
            </Typography>
            <Typography guttorBottom variant="body2">
              Height: {height} cm
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

// typechecking props of MovieCard
CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
}

export default CharacterCard
