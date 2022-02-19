// prop-types is a library for typechecking of props
import PropTypes from "prop-types"

// @mui material components
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

// MovieCard Component
import MovieCard from "features/movies/MovieCard"

function MovieList({ movies }) {
  return (
    <Container>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        paddingTop={4}
        paddingBottom={4}
      >
        {movies.map(({ id, title, director, releaseDate }) => (
          <Grid item key={id} lg={3}>
            <MovieCard film={{ id, title, director, releaseDate }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

// typechecking props for the MovieList
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default MovieList
