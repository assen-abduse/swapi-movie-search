import * as React from "react"

// @mui material components
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

// @mui icons-material components
import StarIcon from "@mui/icons-material/Star"

// react-router-dom components
import { useParams } from "react-router-dom"

// placeholder image for Movie Poster
import moviePoster from "assets/images/poster_image.jpg"

// movie feature function
import { fetchMovie } from "features/movies/api"
import CharacterCard from "features/movies/CharacterCard"

// custom react components
import Spinner from "components/Spinner"
import Header from "layouts/Header"
import PageLayout from "layouts/PageLayout"

function MovieDetails() {
  const [movie, setMovie] = React.useState()
  const [loaded, setLoaded] = React.useState(false)
  const [error, setError] = React.useState(null)

  const { id } = useParams()
  React.useEffect(async () => {
    try {
      const data = await fetchMovie(id)
      // eslint-disable-next-line no-console
      console.log(data)
      setMovie(data)
      setLoaded(true)
    } catch (err) {
      setError(err.message)
      setLoaded(true)
    }
  }, [])
  let content

  if (!loaded) {
    content = <Spinner />
  } else if (loaded && error) {
    content = (
      <Typography variant="body1" color="error">
        {error}
      </Typography>
    )
  } else if (movie && loaded) {
    const { title, releaseDate, director, description, characters } = movie
    content = (
      <Container>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingTop={1}
          paddingBottom={1}
        >
          <Grid item xs={10}>
            <Card sx={{ minHeight: 350 }}>
              <CardMedia>
                <img
                  src={moviePoster}
                  alt={title}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>
              <CardHeader
                titleTypographyProps={{
                  variant: "h3",
                }}
                title={title}
                subheader={releaseDate}
              />
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
                <Typography variant="h4" guttorBottom>
                  Directed by: {director}
                </Typography>
                {/**
                 * IMBD Rating Component
                 * this could be a single compnent that takes props
                 * the data is static since the api doesn't provide this data.
                 */}
                <Stack direction="row" mb={1} mt={1}>
                  <Typography variant="body1" fontWeight="bold">
                    IMDB RATING:
                  </Typography>
                  <StarIcon color="warning" fontSize="medium" fontWeight="bold" />
                  <Typography variant="bod1" fontWeight="bold">
                    8.1/10
                  </Typography>
                </Stack>

                <Typography variant="h4" gutterBottom>
                  Characters:
                </Typography>
                <Grid container spacing={3}>
                  {characters.map((character) => (
                    <Grid item xs={12} md={6} lg={4}>
                      <CharacterCard key={character.name} character={character} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    )
  }
  return (
    <>
      <Header />
      <PageLayout>{content}</PageLayout>
    </>
  )
}

export default MovieDetails
