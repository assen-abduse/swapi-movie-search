import * as React from "react"

// @mui material components
import Typography from "@mui/material/Typography"

// custom react components
import Header from "layouts/Header"
import Spinner from "components/Spinner"

// movie fetching functions
import { fetchMovies } from "features/movies/api"

// Movies components
import MovieList from "features/movies/MovieList"

// page layout component
import PageLayout from "layouts/PageLayout"

function MoviesPage() {
  const [movies, setMovies] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(async () => {
    try {
      const data = await fetchMovies()
      setMovies(data)
      setLoaded(true)
    } catch (err) {
      setError(err.message)
      setLoaded(true)
    }
  }, [])
  return (
    <>
      <Header />
      <PageLayout>
        {!loaded && <Spinner />}
        {movies && loaded && <MovieList movies={movies} />}
        {loaded && error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
      </PageLayout>
    </>
  )
}

export default MoviesPage
