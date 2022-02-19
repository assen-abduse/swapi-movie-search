// prop-types is a library for typechecking of props
import PropTypes from "prop-types"

// @mui material components
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

// react-router-dom components
import { Link } from "react-router-dom"

// placeholder image for Movie Poster
import moviePoster from "assets/images/poster_image.jpg"

function MovieCard({ film }) {
  const { id, title, releaseDate, director } = film
  return (
    <Link to={`/films/${id}`}>
      <Card sx={{ minHeight: 350 }}>
        <CardMedia>
          <img
            src={moviePoster}
            alt={title}
            style={{
              width: "100%",
            }}
          />
        </CardMedia>
        <CardHeader title={title} subheader={releaseDate} />
        <CardContent>
          <Typography>Director: {director}</Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

// typechecking props of MovieCard
MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
}

export default MovieCard
